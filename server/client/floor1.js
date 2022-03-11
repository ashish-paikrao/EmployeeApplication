/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Fetching_Floor_Row_Desk({ firstFloor: models.bookingsytem.firstFloor });
    models.floor1.rowList = output.results.map(result => {
        let item = Object.assign({}, result);
        item.colList = result.No_of_Columns;
        return item;
    });
};