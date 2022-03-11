const crypto = require('crypto');
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.login = async (session, models, vars) => {
    let dateSting = new Date().valueOf().toString();
    let hash = crypto.createHash('md5').update(dateSting).digest('hex');
    let state = 'backtowork' + ',' + hash;
    let output = await session.rest.googleoauth2.GET_initiateOauth2({ state: state });
    models.oauthlogin.authorizeUrl = output.body.authorizeUrl;
    await session.screen('oauthlogin');
    let output1 = await session.rest.googleoauth2.GET_userinfo({ state: state });
    let userInfo = output1.body.userInfo;
    console.log(JSON.stringify(userInfo, null, 2));
    for (var i = 0; i < userInfo.names.length; i++) {
        if (userInfo.names[i].metadata.primary) {
            models.temphome.id = userInfo.names[i].metadata.source.id;
            models.temphome.displayName = userInfo.names[i].displayName;
        }
    }
    let oauthId = models.temphome.id;
    let name = models.temphome.displayName;
    let userData = await session.rdbs['Manage Visitors'].Get_User_By_OAuthId({ oauthId: oauthId });
    if (!userData.results[0]) {
        await session.rdbs['Manage Visitors'].Create_User_With_OAuth({
            oauthId: oauthId,
            name: name
        });
        userData = await session.rdbs['Manage Visitors'].Get_User_By_OAuthId({ oauthId: oauthId });
    }
    let user = userData.results[0];
    vars.session.user = {
        email: user.Email,
        name: user.Name,
        password: user.Password,
        address: user.Address,
        latitude: user.Latitude,
        longitude: user.Longitude,
        phone: user.Phone,
        id: user.Id,
        employeeId: user.EmployeeId,
        oauthId: user.OAuthId
    };
    if (!vars.session.user.email) {
        models.profile.cantGoBack = true;
        await session.screen('profile');
    } else {
        await session.screen('home');
    }
};
