/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Get_desks_for_selected_floor({ floorNo: models.bookingsytem.floorNo });
    models.deskinformation.deskInfo = output.results.map(result => {
        let item = Object.assign({}, result);
        item.deskID = result.DeskID;
        item.deskRow = result.RowNo;
        item.deskColumn = result.ColumnNo;
        item.ocuupied = result.Description;
        return item;
    });
    let output1 = await session.rdbs['Manage Visitors'].Fetch_Booked_DeskID({
        floorNo: models.bookingsytem.floorNo,
        selectedDate: models.bookingsytem.selectedDate
    });
    models.deskinformation.bookedInformation = output1.results.map(result1 => {
        let item1 = Object.assign({}, result1);
        item1.deskID = result1.DeskID;
        item1.bookingName = result1.BookedForEmpID;
        return item1;
    });
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.passData = async (session, models, vars) => {
    await session.screen('snackandlunchoption');
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.refreshContent = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Get_desks_for_selected_floor({ floorNo: models.bookingsytem.floorNo });
    models.deskinformation.deskInfo = output.results.map(result => {
        let item = Object.assign({}, result);
        item.deskID = result.DeskID;
        item.deskRow = result.RowNo;
        item.deskColumn = result.ColumnNo;
        item.ocuupied = result.Description;
        return item;
    });
    let output1 = await session.rdbs['Manage Visitors'].Get_booked_desk({
        dateSelected: models.deskinformation.dateSelected,
        floorNo: models.bookingsytem.floorNo
    });
    models.deskinformation.bookedInformation = output1.results.map(result1 => {
        let item1 = Object.assign({}, result1);
        item1.deskID = result1.DeskID;
        item1.bookingName = result1.BookedForEmpID;
        return item1;
    });
    for (i = 0; i < models.deskinformation.deskInfo.length; i++) {
        if (models.deskinformation.bookedInformation != null) {
            for (j = 0; j < models.deskinformation.bookedInformation.length; j++) {
                if (models.deskinformation.deskInfo[i].deskID == models.deskinformation.bookedInformation[j].deskID) {
                    models.deskinformation.deskInfo[i].ocuupied = '1';
                    console.log(models.deskinformation.deskInfo[i].ocuupied + '/////////////////////////');
                }
            }
        }
    }
};