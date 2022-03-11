/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].SELECT_Users1();
    models.bookforother.user_Booking = output.results.map(result => {
        let item = {
            user_name: result.Name,
            user_id: result.Id,
            contact: result.Phone
        };
        return item;
    });
};