/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Fetching_Floor_Row_Desk({ selectedFloor: models.floor2.selectedFloor });
    models.floor2.rowList = output.results.map(result => {
        let item = Object.assign({}, result);
        item.totalColumns = result.No_of_Columns;
        return item;
    });
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.getSnackandLunch = async (session, models, vars) => {
    await session.screen('snackandlunchoption');
};