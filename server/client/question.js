const crypto = require('crypto');
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    models.question.temperatureWarning = vars.session.temperatureWarning;
    let output = await session.rdbs['Manage Visitors'].Get_Questions();
    models.question.questions = output.results;
    let visitTemperature = await getLatestVisitTemperature(session, vars);
    let answerTemperature = await getLatestAnswersTemperature(session, vars);
    if (visitTemperature) {
        models.question.temperature = visitTemperature.value;
        if (answerTemperature && answerTemperature.date > visitTemperature.date) {
            models.question.temperature = answerTemperature.value;
        }
    } else if (answerTemperature) {
        models.question.temperature = answerTemperature.value;
    }
    if (models.question.temperature) {
        models.question.temperature = +models.question.temperature.toFixed(1);
    }
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.submit = async (session, models, vars) => {
    let dateSting = new Date().valueOf().toString();
    let hash = crypto.createHash('md5').update(dateSting).digest('hex');
    let date = getCurrentDate();
    models.question.questions.forEach(question => {
        session.rdbs['Manage Visitors'].Set_Answers({
            userId: vars.session.user.id,
            questionId: question.Id,
            answer: question.answer ? 'yes' : 'no',
            date: date,
            formId: hash,
            visitId: null
        });
    });
    await session.rdbs['Manage Visitors'].Set_Employee_Temperature({
        userId: vars.session.user.id,
        temperature: models.question.temperature,
        date: date,
        formId: hash
    });
    if (models.question.showWarning) {
        console.log('Send an email');
    }
    await session.screen('home');
};
async function getLatestVisitTemperature(session, vars) {
    let visitOutput = await session.rdbs['Manage Visitors'].Get_Latest_Visit({ userId: vars.session.user.id });
    let visit = visitOutput.results[0];
    if (!visit) {
        return null;
    }
    if (visit.EndTemperature) {
        return {
            date: visit.EndTime,
            value: visit.EndTemperature
        };
    } else {
        return {
            date: visit.StartTime,
            value: visit.StartTemperature
        };
    }
}
async function getLatestAnswersTemperature(session, vars) {
    let answersOutput = await session.rdbs['Manage Visitors'].Get_Latest_Answers({ userId: vars.session.user.id });
    let answer = answersOutput.results[0];
    if (!answer) {
        return null;
    }
    return {
        date: answer.Date,
        value: answer.Temperature
    };
}
function getCurrentDate() {
    const date = new Date();
    const yyyyDDMM = date.toISOString().substr(0, 10);
    const time = date.toTimeString().substr(0, 8);
    return `${ yyyyDDMM } ${ time }`;
}
