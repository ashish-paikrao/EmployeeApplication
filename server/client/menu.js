/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.schedulescreen = async (session, models, vars) => {
    await session.screen('homelogin');
};