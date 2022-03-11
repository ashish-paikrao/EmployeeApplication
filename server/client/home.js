/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    await exports.refresh(session, models, vars);
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.refresh = async (session, models, vars) => {
    console.log('=== GET ANNOUNCEMENTS ===');
    let announcementsOutput = await session.rdbs['Manage Visitors'].Get_Announcements();
    models.home.announcements = announcementsOutput.results;
    console.log('=== GET LATEST TEMPERATURE ===');
    models.home.latestTemperature = {
        value: null,
        date: null
    };
    let visitTemperature = await getLatestVisitTemperature(session, vars);
    let answer = await getLatestAnswer(session, vars);
    if (visitTemperature) {
        models.home.latestTemperature = visitTemperature;
    }
    if (answer && answer.Date > models.home.latestTemperature.date) {
        models.home.latestTemperature = {
            date: answer.Date,
            value: answer.Temperature
        };
    }
    if (models.home.latestTemperature.value) {
        models.home.latestTemperature = { value: +models.home.latestTemperature.value.toFixed(1) };
    }
    if (answer && answer.Date.toDateString() === new Date().toDateString()) {
        models.home.latestAnswerFormId = answer.FormId;
    } else {
        models.home.latestAnswerFormId = null;
    }
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.showAnswers = async (session, models, vars) => {
    await session.screen('answers');
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
async function getLatestAnswer(session, vars) {
    let answersOutput = await session.rdbs['Manage Visitors'].Get_Latest_Answers({ userId: vars.session.user.id });
    let answer = answersOutput.results[0];
    if (!answer) {
        return null;
    }
    return answer;
}