/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.Submit = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Fetch_ID({ email: models.login.email });
    models.homelogin.User_id = output.results[0].Id;
    let output1 = await session.rdbs['Manage Visitors'].checkexisting_user_record({
        User_id: models.homelogin.User_id,
        selecteddate: models.homelogin.selecteddate,
        Loactioncode: models.homelogin.Loactioncode,
        selectedshift: models.homelogin.selectedshift
    });
    models.homelogin.CheckExistingrecord = output1.results;
    if (models.homelogin.CheckExistingrecord != null && models.homelogin.CheckExistingrecord.length >= 1) {
        await session.alert('Entry already existed');
        await session.screen('homelogin');
    } else {
        let output2 = await session.rdbs['Manage Visitors'].Check_in_dailylimit({
            Loactioncode: models.homelogin.Loactioncode,
            selecteddate: models.homelogin.selecteddate
        });
        models.homelogin.dailylimitformultipledays = output2.results.map(result => {
            let item = { Available: result.Available };
            return item;
        });
        if (models.homelogin.dailylimitformultipledays != null && models.homelogin.dailylimitformultipledays.length >= 1) {
            if (models.homelogin.dailylimitformultipledays[0].Available <= 0) {
                await session.alert('Maximum limit reached for the day');
            } else {
                await session.rdbs['Manage Visitors'].Insert_the_todays_date({
                    Loactioncode1: models.homelogin.Loactioncode,
                    selectedshift1: models.homelogin.selectedshift,
                    User_id1: models.homelogin.User_id,
                    selecteddate: models.homelogin.selecteddate
                });
                let output21 = await session.rdbs['Manage Visitors'].select_dailylimit1({
                    Loactioncode: models.homelogin.Loactioncode,
                    selecteddate: models.homelogin.selecteddate
                });
                models.homelogin.Available = output21.results[0].Available;
                models.homelogin.onewayavailable = output21.results.Available;
                await session.rdbs['Manage Visitors'].deducting_the_available_table({
                    selecteddate: models.homelogin.selecteddate,
                    onewayavailable: models.homelogin.onewayavailable
                });
                await session.alert('Successfully Added!');
            }
        } else {
            await session.alert('Please contact admin to fill up other dates');
        }
    }
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.sameforallday = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Fetch_ID({ email: models.login.email });
    models.homelogin.User_id = output.results[0].Id;
    if (!true) {
        await session.alert('Entry already existed for all days in selected week');
        await session.screen('homelogin');
    } else {
        let output1 = await session.rdbs['Manage Visitors'].Check_available_for_all_days({
            Mon: models.homelogin.Mon,
            Fri: models.homelogin.Fri,
            Loactioncode: models.homelogin.Loactioncode
        });
        models.homelogin.dailylimitformultipledays = output1.results.map(result => {
            let item = Object.assign({}, result);
            item.Available = result.Available;
            return item;
        });
        if (models.homelogin.dailylimitformultipledays[0].Available <= 0 || models.homelogin.dailylimitformultipledays[1].Available <= 0 || models.homelogin.dailylimitformultipledays[2].Available <= 0 || models.homelogin.dailylimitformultipledays[3].Available <= 0 || models.homelogin.dailylimitformultipledays[4].Available <= 0) {
            await session.alert('Maximum limit reached ');
        } else {
            if (models.homelogin.dailylimitformultipledays.length == 5) {
                await session.rdbs['Manage Visitors'].delete_older_EmployeeSchedule({
                    User_id: models.homelogin.User_id,
                    Mon: models.homelogin.Mon,
                    Fri: models.homelogin.Fri,
                    Loactioncode: models.homelogin.Loactioncode
                });
                await session.rdbs['Manage Visitors'].day1({
                    User_id: models.homelogin.User_id,
                    Loactioncode: models.homelogin.Loactioncode,
                    Mon: models.homelogin.Mon,
                    selectedshift: models.homelogin.selectedshift
                });
                await session.rdbs['Manage Visitors'].day2({
                    User_id: models.homelogin.User_id,
                    Tue: models.homelogin.Tue,
                    Loactioncode: models.homelogin.Loactioncode,
                    selectedshift: models.homelogin.selectedshift
                });
                await session.rdbs['Manage Visitors'].day3({
                    User_id: models.homelogin.User_id,
                    Loactioncode: models.homelogin.Loactioncode,
                    Wen: models.homelogin.Wen,
                    selectedshift: models.homelogin.selectedshift
                });
                await session.rdbs['Manage Visitors'].day4({
                    User_id: models.homelogin.User_id,
                    Loactioncode: models.homelogin.Loactioncode,
                    Thu: models.homelogin.Thu,
                    selectedshift: models.homelogin.selectedshift
                });
                await session.rdbs['Manage Visitors'].day5({
                    User_id: models.homelogin.User_id,
                    Loactioncode: models.homelogin.Loactioncode,
                    Fri: models.homelogin.Fri,
                    selectedshift: models.homelogin.selectedshift
                });
                models.homelogin.AvailableEntries = {
                    day1: models.homelogin.dailylimitformultipledays[0].Available,
                    day2: models.homelogin.dailylimitformultipledays[1].Available,
                    day3: models.homelogin.dailylimitformultipledays[2].Available,
                    day4: models.homelogin.dailylimitformultipledays[3].Available,
                    day5: models.homelogin.dailylimitformultipledays[4].Available
                };
                await session.rdbs['Manage Visitors'].Day1_update_in_DailyLimit({
                    Loactioncode: models.homelogin.Loactioncode,
                    Mon: models.homelogin.Mon,
                    day1: models.homelogin.AvailableEntries.day1
                });
                await session.rdbs['Manage Visitors'].Day2_DailyLimit_update({
                    day2: models.homelogin.AvailableEntries.day2,
                    Loactioncode: models.homelogin.Loactioncode,
                    Tue: models.homelogin.Tue
                });
                await session.rdbs['Manage Visitors'].Day3_DailyLimit_update({
                    day3: models.homelogin.AvailableEntries.day3,
                    Loactioncode: models.homelogin.Loactioncode,
                    Wen: models.homelogin.Wen
                });
                await session.rdbs['Manage Visitors'].Day4_DailyLimit_Update({
                    day4: models.homelogin.AvailableEntries.day4,
                    Loactioncode: models.homelogin.Loactioncode,
                    Thu: models.homelogin.Thu
                });
                await session.rdbs['Manage Visitors'].Day5_DailyLimit_Update({
                    day5: models.homelogin.AvailableEntries.day5,
                    Loactioncode: models.homelogin.Loactioncode,
                    Fri: models.homelogin.Fri
                });
                await session.alert('Successfully added entries');
            } else {
                await session.alert('Date is not set by admin contact admin');
            }
        }
    }
};