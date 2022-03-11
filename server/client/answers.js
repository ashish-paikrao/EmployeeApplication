/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    models.answers = {};
    let answersData = await session.rdbs['Manage Visitors'].Get_Answers_With_All_Data_By_FormID({ formId: models.home.latestAnswerFormId });
    models.answers.questions = answersData.results;
    let employeeTemperatureData = await session.rdbs['Manage Visitors'].Get_Employee_Temperature_By_FormId({ formId: models.home.latestAnswerFormId });
    models.answers.temperature = employeeTemperatureData.results[0].Temperature;
    let userData = await session.rdbs['Manage Visitors'].Get_User_By_Id({ userId: vars.session.user.id });
    models.answers.employee = userData.results[0];
    if (!answersData.results || !answersData.results) {
        await session.alert(`Error processing answers with formId: ${ models.home.latestAnswerFormId }`);
    }
    models.answers.temperatureWarning = vars.session.temperatureWarning;
};
