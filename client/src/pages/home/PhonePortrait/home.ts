import { Component } from '@angular/core';
import { Screen } from 'app/screen';
import * as moment from 'moment-timezone';
declare var window: any;

@Component({
    selector: 'screen-home-phoneportrait',
    templateUrl: 'home.html'
})
export class home_PhonePortrait extends Screen {
    data: any;

    ngOnInit(): void {
        super.ngOnInit();
        // Logic to run when the screen loads goes here.
        if (window.SafariViewController) {
            window.SafariViewController.hide();
            console.log('SafariViewController.hide called.');
        }
    }

    generateQrCode(): void {
        if (!this.data.latestAnswerFormId) {
            this.data.qrCode = null;
            return;
        }

        // TO generate QR with all data:

        //   const qrCodeData = {
        //     formId: this.data.latestAnswerFormId,
        //     questions: this.data.questions,
        //     employee:  this.data.employee,
        //     employeeAnswersTemperature: this.data.employeeAnswersTemperature,
        //     latestTemperature: this.data.latestTemperature
        //   };

        const qrCodeData = { formId: this.data.latestAnswerFormId };
        this.data.qrCode = JSON.stringify(qrCodeData);
        console.log(this.data.qrCode);
    }

    openProfile(): void {
        this.navigationService.go('profile');
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        // Logic to run when the screen unloads goes here.
    }

    onDataLoad(data: any): void {
        // Logic to run when the screen's data is updated goes here.
        this.generateQrCode();
        this.humanizeDate(this.data.latestTemperature, 'date');
    }
    onBackButton(): boolean {
        //(Android) returns :
        // true - handle the event in App Hooks
        // false - stop the event propogation
        return true;
    }

    onRefresh(refresher) {
        this.action('refresh');
        setTimeout(() => {
            refresher.complete();
        }, 100);
    }

    showAnnouncement(item) {
        this.alert(item.Details, { title: item.Title });
    }

    showTemperatures() {
        if (this.data.latestTemperature.value) {
            this.go('mytemperature');
        }
    }

    private humanizeDate(obj, prop) {
        const date = moment(obj[prop]);
        if (!date.isValid()) return;
        const fromNow = date.fromNow();
        obj[prop] = date.calendar(null, {
            lastWeek: () => {
                return "[" + fromNow + "]";
            },
            lastDay: '[Yesterday]',
            sameDay: '[Today]',
            sameElse: () => {
                return "[" + fromNow + "]";
            }
        });
    }
}
