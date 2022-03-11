/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.start = async (session, models, vars) => {
    vars.session.temperatureWarning = 101;
    await session.screen('login');
};