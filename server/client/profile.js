/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    models.profile.user = {
        email: vars.session.user.email,
        name: vars.session.user.name,
        phone: vars.session.user.phone,
        address: vars.session.user.address,
        latitude: vars.session.user.latitude,
        longitude: vars.session.user.longitude,
        employeeId: vars.session.user.employeeId
    };
}
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.done = async (session, models, vars) => {
    const output = await session.rdbs['Manage Visitors'].Update_User({
        id: vars.session.user.id,
        email: models.profile.user.email,
        name: models.profile.user.name,
        phone: models.profile.user.phone,
        address: models.profile.user.address,
        latitude: models.profile.user.latitude,
        longitude: models.profile.user.longitude,
        employeeId: models.profile.user.employeeId
    });
    for (let property of ['email', 'name', 'phone', 'address', 'employeeId', 'latitude', 'longitude']) {
        vars.session.user[property] = models.profile.user[property];
    }
    models.profile.cantGoBack = false;
    await session.screen('home');
};