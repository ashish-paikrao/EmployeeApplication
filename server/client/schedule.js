/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.onload = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Fetch_ID({ email: models.login.email });
    models.schedule.User_id = output.results[0].Id;
    let output1 = await session.rdbs['Manage Visitors'].check_user_entry2({ User_id: models.schedule.User_id });
    models.schedule.checkuser = output1.results;
    if (models.schedule.Checkuser.length <= 0) {
        await session.rdbs['Manage Visitors'].make_entry_in_the_table({ User_id: models.schedule.User_id });
    }
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.display = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Fetch_ID({ email: models.login.email });
    models.schedule.User_id = output.results[0].Id;
    if (models.schedule.Days == 'Mon') {
        let output1 = await session.rdbs['Manage Visitors'].Monradiofetch({ User_id: models.schedule.User_id });
        models.schedule.firsthalf = output1.results[0].Mon1;
        models.schedule.secondhalf = output1.results[0].Mon2;
    }
    if (models.schedule.Days == 'Tue') {
        let output1 = await session.rdbs['Manage Visitors'].Tueradiofetch({ User_id: models.schedule.User_id });
        models.schedule.firsthalf = output1.results[0].Mon1;
        models.schedule.firsthalf = output1.results[0].Tue1;
        models.schedule.secondhalf = output1.results[0].Mon2;
        models.schedule.secondhalf = output1.results[0].Tue2;
    }
    if (models.schedule.Days == 'Wen') {
        let output1 = await session.rdbs['Manage Visitors'].Wenradiofetch({ User_id: models.schedule.User_id });
        models.schedule.firsthalf = output1.results[0].Mon1;
        models.schedule.firsthalf = output1.results[0].Tue1;
        models.schedule.firsthalf = output1.results[0].Wed1;
        models.schedule.secondhalf = output1.results[0].Mon2;
        models.schedule.secondhalf = output1.results[0].Tue2;
        models.schedule.secondhalf = output1.results[0].Wed2;
    }
    if (models.schedule.Days == 'Thu') {
        let output1 = await session.rdbs['Manage Visitors'].Thuradiofetch({ User_id: models.schedule.User_id });
        models.schedule.firsthalf = output1.results[0].Mon1;
        models.schedule.firsthalf = output1.results[0].Tue1;
        models.schedule.firsthalf = output1.results[0].Wed1;
        models.schedule.firsthalf = output1.results[0].Thu1;
        models.schedule.secondhalf = output1.results[0].Mon2;
        models.schedule.secondhalf = output1.results[0].Tue2;
        models.schedule.secondhalf = output1.results[0].Wed2;
        models.schedule.secondhalf = output1.results[0].Thu2;
    }
    if (models.schedule.Days == 'Fri') {
        let output1 = await session.rdbs['Manage Visitors'].Friradiofetch({ User_id: models.schedule.User_id });
        models.schedule.firsthalf = output1.results[0].Mon1;
        models.schedule.firsthalf = output1.results[0].Tue1;
        models.schedule.firsthalf = output1.results[0].Wed1;
        models.schedule.firsthalf = output1.results[0].Thu1;
        models.schedule.firsthalf = output1.results[0].Fri1;
        models.schedule.secondhalf = output1.results[0].Mon2;
        models.schedule.secondhalf = output1.results[0].Tue2;
        models.schedule.secondhalf = output1.results[0].Wed2;
        models.schedule.secondhalf = output1.results[0].Thu2;
        models.schedule.secondhalf = output1.results[0].Fri2;
    }
    if (models.schedule.firsthalf == 1 && models.schedule.secondhalf == 0) {
        models.schedule.highlightradiobutton = '1';
    } else {
        if (models.schedule.firsthalf == 0 && models.schedule.secondhalf == 1) {
            models.schedule.highlightradiobutton = '2';
        } else {
            if (models.schedule.firsthalf == 1 && models.schedule.secondhalf == 1) {
                models.schedule.highlightradiobutton = '3';
            } else {
                models.schedule.highlightradiobutton = '4';
            }
        }
    }
    if (models.schedule.firsthalf == 1 && models.schedule.secondhalf == 0 && models.schedule.firsthalf == 1 && models.schedule.secondhalf == 0 && models.schedule.firsthalf == 1 && models.schedule.secondhalf == 0 && models.schedule.firsthalf == 1 && models.schedule.secondhalf == 0 && models.schedule.firsthalf == 1 && models.schedule.secondhalf == 0) {
        models.schedule.highlightradiobutton = '1';
        models.schedule.Sameforalldays = true;
    } else {
        if (models.schedule.firsthalf == 0 && models.schedule.secondhalf == 1 && models.schedule.firsthalf == 0 && models.schedule.secondhalf == 1 && models.schedule.firsthalf == 0 && models.schedule.secondhalf == 1 && models.schedule.firsthalf == 0 && models.schedule.secondhalf == 1 && models.schedule.firsthalf == 0 && models.schedule.secondhalf == 1) {
            models.schedule.highlightradiobutton = '2';
            models.schedule.Sameforalldays = true;
        } else {
            if (models.schedule.firsthalf == 1 && models.schedule.secondhalf == 1 && models.schedule.firsthalf == 1 && models.schedule.secondhalf == 1 && models.schedule.firsthalf == 1 && models.schedule.secondhalf == 1 && models.schedule.firsthalf == 1 && models.schedule.secondhalf == 1 && models.schedule.firsthalf == 1 && models.schedule.secondhalf == 1) {
                models.schedule.highlightradiobutton = '3';
                models.schedule.Sameforalldays = true;
            } else {
                models.schedule.highlightradiobutton = '4';
                models.schedule.Sameforalldays = true;
            }
        }
    }
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.sameforalldayssubmit = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Fetch_ID({ email: models.login.email });
    models.schedule.User_id = output.results[0].Id;
    if (models.schedule.Sameforallweeks == true) {
        if (models.schedule.radioValue == 1) {
            await session.rdbs['Manage Visitors']['1st__weeks1']({ User_id: models.schedule.User_id });
        } else {
            if (models.schedule.radioValue == 2) {
                await session.rdbs['Manage Visitors']['2ndthalf_week']({
                    User_id: models.schedule.User_id,
                    User_id1: models.schedule.User_id
                });
            } else {
                if (models.schedule.radioValue == 4) {
                    await session.rdbs['Manage Visitors'].insert_none({
                        User_id1: models.schedule.User_id,
                        User_id: models.schedule.User_id
                    });
                } else {
                    await session.rdbs['Manage Visitors'].fullweek({
                        User_id1: models.schedule.User_id,
                        User_id: models.schedule.User_id
                    });
                }
            }
        }
    }
    await session.screen('home');
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.Submit = async (session, models, vars) => {
    let output = await session.rdbs['Manage Visitors'].Fetch_ID({ email: models.login.email });
    models.schedule.User_id = output.results[0].Id;
    if (models.schedule.Days == 'Mon') {
        if (models.schedule.radioValue == 1) {
            await session.rdbs['Manage Visitors']['1stmon_insert']({ User_id: models.schedule.User_id });
        } else {
            if (models.schedule.radioValue == 2) {
                await session.rdbs['Manage Visitors'].insert2nd_mon({ User_id: models.schedule.User_id });
            } else {
                if (models.schedule.radioValue == 4) {
                    await session.rdbs['Manage Visitors'].insert_none({
                        User_id1: models.schedule.User_id,
                        User_id: models.schedule.User_id
                    });
                } else {
                    await session.rdbs['Manage Visitors'].insertfull_mon({ User_id: models.schedule.User_id });
                }
            }
        }
    } else {
        if (models.schedule.Days == 'Tue') {
            if (models.schedule.radioValue == 1) {
                await session.rdbs['Manage Visitors']['1sthalf_tue']({
                    User_id: models.schedule.User_id,
                    User_id1: models.schedule.User_id
                });
            } else {
                if (models.schedule.radioValue == 2) {
                    await session.rdbs['Manage Visitors'].insert2nd_tue({
                        User_id: models.schedule.User_id,
                        User_id1: models.schedule.User_id
                    });
                } else {
                    if (models.schedule.radioValue == 4) {
                        await session.rdbs['Manage Visitors'].insert_none({
                            User_id1: models.schedule.User_id,
                            User_id: models.schedule.User_id
                        });
                    } else {
                        await session.rdbs['Manage Visitors'].insertfull_tue({ User_id1: models.schedule.User_id });
                    }
                }
            }
        } else {
            if (models.schedule.Days == 'Wen') {
                if (models.schedule.radioValue == 1) {
                    await session.rdbs['Manage Visitors']['1sthalf_wen']({
                        User_id1: models.schedule.User_id,
                        User_id: models.schedule.User_id
                    });
                } else {
                    if (models.schedule.radioValue == 2) {
                        await session.rdbs['Manage Visitors'].insert2nd_wen({ User_id: models.schedule.User_id });
                    } else {
                        if (models.schedule.radioValue == 4) {
                            await session.rdbs['Manage Visitors'].insert_none({
                                User_id1: models.schedule.User_id,
                                User_id: models.schedule.User_id
                            });
                        } else {
                            await session.rdbs['Manage Visitors'].insertfull_wen({
                                User_id1: models.schedule.User_id,
                                User_id: models.schedule.User_id
                            });
                        }
                    }
                }
            }
        }
    }
    if (models.schedule.Days == 'Thu') {
        if (models.schedule.radioValue == 1) {
            await session.rdbs['Manage Visitors']['1sthalf_Thu']({
                User_id: models.schedule.User_id,
                User_id1: models.schedule.User_id
            });
        } else {
            if (models.schedule.radioValue == 2) {
                await session.rdbs['Manage Visitors'].insert2nd_Thu({
                    User_id: models.schedule.User_id,
                    User_id1: models.schedule.User_id
                });
            } else {
                if (models.schedule.radioValue == 4) {
                    await session.rdbs['Manage Visitors'].insert_none({
                        User_id1: models.schedule.User_id,
                        User_id: models.schedule.User_id
                    });
                } else {
                    await session.rdbs['Manage Visitors'].insertfull_Thu({
                        User_id: models.schedule.User_id,
                        User_id1: models.schedule.User_id
                    });
                }
            }
        }
    } else {
        if (models.schedule.Days == 'Fri') {
            if (models.schedule.radioValue == 1) {
                await session.rdbs['Manage Visitors']['1sthalf_Fri']({ User_id1: models.schedule.User_id });
            } else {
                if (models.schedule.radioValue == 2) {
                    await session.rdbs['Manage Visitors'].insert2nd_Fri({
                        User_id: models.schedule.User_id,
                        User_id1: models.schedule.User_id
                    });
                } else {
                    if (models.schedule.radioValue == 4) {
                        await session.rdbs['Manage Visitors'].insert_none({
                            User_id1: models.schedule.User_id,
                            User_id: models.schedule.User_id
                        });
                    } else {
                        await session.rdbs['Manage Visitors'].insertfull_Fri({
                            User_id: models.schedule.User_id,
                            User_id1: models.schedule.User_id
                        });
                    }
                }
            }
        }
    }
    await session.screen('home');
};