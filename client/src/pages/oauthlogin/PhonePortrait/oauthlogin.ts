import { Component } from '@angular/core';
import { Screen } from 'app/screen';
declare var window: any;

@Component({
    selector: 'screen-oauthlogin-phoneportrait',
    templateUrl: 'oauthlogin.html'
})
export class oauthlogin_PhonePortrait extends Screen {
    data: any;
    inAppBrowserRef: any;

    ngOnInit(): void {
        super.ngOnInit();
        // Logic to run when the screen loads goes here.
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        // Logic to run when the screen unloads goes here.
    }

    onDataLoad(data: any) {
        // Logic to run when the screen's data is updated goes here.
        if (data && data.authorizeUrl) {
            if (window.SafariViewController) {
                this.openUrl(data.authorizeUrl);
            } else {
                window.open(data.authorizeUrl);
            }
        }
    }

    async ionViewDidEnter() {
        await super.ionViewDidEnter();
        // setTimeout(() => { 
        this.action('login', null, null);
        // }, 5000)

    }

    openUrl(url) {
        window.SafariViewController.isAvailable(function (available) {
            if (available) {
                window.handleOpenURL = (url) => {
                    console.log("URL: " + url)
                    setTimeout(function () {
                        if (window.SafariViewController) {
                            window.SafariViewController.hide();
                            console.log('SafariViewController.hide called.');
                        }
                    }, 0);
                }
                window.SafariViewController.show({
                    url: url,
                    hidden: false,
                    animated: false,
                    tintColor: "#00ffff",
                    barColor: "#00000000",
                    controlTintColor: "#ffffff"
                },
                    // this success handler will be invoked for the lifecycle events 'opened', 'loaded' and 'closed'
                    (result) => {
                        console.log("Result: " + JSON.stringify(result));
                        if (result.event === 'opened') {
                            console.log('opened');
                        } else if (result.event === 'loaded') {
                            console.log('loaded');
                        } else if (result.event === 'closed') {
                            console.log('closed');
                        }
                    },
                    (msg) => {
                        console.log("KO: " + msg);
                    });
            } else {
                window.open(url);
            }
        })
    }
}

