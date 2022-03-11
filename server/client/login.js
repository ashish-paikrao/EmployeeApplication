const crypto = require('crypto');
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.submit = async (session, models, vars) => {
    try {
        let output = await session.rdbs['Manage Visitors'].Get_EMPLOYEE_User({ email: models.login.email });
        let user = output.results[0];
        let hash = crypto.createHash('md5').update(models.login.password).digest('hex');
        console.log(hash);
        if (true) {
            vars.session.user = {
                email: user.Email,
                name: user.Name,
                password: user.Password,
                address: user.Address,
                latitude: user.Latitude,
                longitude: user.Longitude,
                phone: user.Phone,
                id: user.Id,
                employeeId: user.EmployeeId
            };
            if (!vars.session.user.name) {
                models.profile.cantGoBack = true;
                await session.screen('profile');
            } else {
                await session.screen('home');
            }
        } else {
            models.login.isError = true;
            await session.screen('login');
        }
    } catch (error) {
        models.login.isError = true;
        await session.screen('login');
    }
};