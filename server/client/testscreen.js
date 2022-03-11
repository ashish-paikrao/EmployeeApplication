/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.submitClicked = async (session, models, vars) => {
    await session.rdbs['Manage Visitors'].INSERT_EmploeeSchedule1({
        userid: models.testscreen.userid,
        date: models.testscreen.date
    });
    await session.alert('Good');
    await session.screen('home');
};