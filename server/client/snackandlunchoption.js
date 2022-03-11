/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].fetching__user_data();
    models.snackandlunchoption.userBooking = output.results.map(result => {
        let item = {
            userName: result.Name,
            userID: result.Id,
            contact: result.Phone
        };
        return item;
    });
    let output1 = await session.rdbs['Manage Visitors'].get_userid({ email: models.login.email });
    models.snackandlunchoption.UserId = output1.results[0].Id;
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.confirm = async (session, models, vars) => {
    let output1 = await session.rdbs['Manage Visitors'].checking_Desk_Record({ selectedDesk: models.deskinformation.selectedDesk });
    models.snackandlunchoption.checkingDeskRecord = output1.results.map(result => {
        let item = { checkingDeskID: result.DeskID };
        return item;
    });
    if (models.snackandlunchoption.Bookforother == true) {
        await session.rdbs['Manage Visitors'].bookdesk_for_other({
            selectedDesk: models.snackandlunchoption.selectedDesk,
            floorNo: models.bookingsytem.floorNo,
            UserId1: models.snackandlunchoption.UserId,
            snack: models.snackandlunchoption.snack,
            lunch: models.snackandlunchoption.lunch,
            selectedRow: models.deskinformation.selectedRow,
            selectedColumn: models.deskinformation.selectedColumn,
            dateSelected: models.deskinformation.dateSelected,
            Book_for_other_userID: models.snackandlunchoption.Book_for_other_userID
        });
    } else {
        await session.rdbs['Manage Visitors'].bookdesk_for_me({
            selectedDesk: models.snackandlunchoption.selectedDesk,
            floorNo: models.bookingsytem.floorNo,
            UserId: models.snackandlunchoption.UserId,
            UserId1: models.snackandlunchoption.UserId,
            snack: models.snackandlunchoption.snack,
            lunch: models.snackandlunchoption.lunch,
            selectedRow: models.deskinformation.selectedRow,
            selectedColumn: models.deskinformation.selectedColumn,
            dateSelected: models.deskinformation.dateSelected
        });
    }
    await session.alert('Desk Booked Successfully!', {
        title: 'Success',
        okLabel: 'Ok'
    });
    await session.screen('home');
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.cancel = async (session, models, vars) => {
    await session.screen('bookingsytem');
};