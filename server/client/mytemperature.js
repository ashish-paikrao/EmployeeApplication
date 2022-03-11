/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Get_Employee_Temperatures_by_UserId({ userId: vars.session.user.id });
    models.mytemperature.temperatures = [];
    for (let item of output.results) {
        models.mytemperature.temperatures.push({
            date: item.Date,
            value: +item.Temperature.toFixed(1)
        });
    }
};