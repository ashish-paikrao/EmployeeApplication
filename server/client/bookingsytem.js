/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Select_Floor_No();
    models.bookingsytem.totalFloor = output.results.map(result => {
        let item = Object.assign({}, result);
        item.floorNo = result.FloorNo;
        return item;
    });
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports['totalFloor[].floorClick'] = async (session, models, vars) => {
    models.floor2.selectedFloor = models.bookingsytem.floorNo;
    models.deskinformation.selectedFloor = models.bookingsytem.floorNo;
    await session.screen('deskinformation');
};