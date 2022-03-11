/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].SELECT_Users2();
    models.history.userBooking = output.results.map(result => {
        let item = {
            userName: result.Name,
            contact: result.Phone,
            userID: result.Id
        };
        return item;
    });
};