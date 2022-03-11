import { Component } from '@angular/core';
import { Screen } from 'app/screen';
import * as moment from 'moment-timezone';
import { unitOfTime } from 'moment';
declare var window: any;
var currentday;
var count = 0;
@Component({
    selector: 'screen-homelogin-phoneportrait',
    templateUrl: 'homelogin.html'
})
export class homelogin_PhonePortrait extends Screen {
    data: any;

    ngOnInit(): void {
        super.ngOnInit();
        // Logic to run when the screen loads goes here.
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        // Logic to run when the screen unloads goes here.
    }

    onDataLoad(data: any): void {
        // Logic to run when the screen's data is updated goes here.
        this.data.selectedshift = 1;// declaring selcted shift as 1 for full day
        this.data.Loactioncode = 'Pune'; //seeting the location code pune as default
       
        if (this.global.onetimeonly == 0)
        {

            this.global.onetimeonly = 1
            currentday = moment().format("ddd");
            this.data.Days = moment().format("ddd");
            if (this.data.Days == 'Wed') {
                this.data.Days = 'Wen'
            }
            if (currentday == 'Mon') {
                //this.data.Sun = moment().subtract(1, 'days').format("DD");
                this.data.Mon = moment().format("YYYYMMDD");
                this.data.selecteddate = moment().format("YYYYMMDD");
                this.data.Tue = moment().add(1, 'days').format("YYYYMMDD");
                this.data.Wen = moment().add(2, 'days').format("YYYYMMDD");
                this.data.Thu = moment().add(3, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(4, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(5, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(6, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(6, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Tue') {
                this.data.Mon = moment().subtract(1, 'days').format("YYYYMMDD");
                this.data.Tue = moment().format("YYYYMMDD");
                this.data.selecteddate = moment().format("YYYYMMDD");
                this.data.Wen = moment().add(1, 'days').format("YYYYMMDD");
                this.data.Thu = moment().add(2, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(3, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(4, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(5, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(1, 'days').format('MMMMDoYYYY'); //{Mon}
                this.data.EndDate = moment().add(5, 'days').format('MMMMDoYYYY'); //{Sun}
            }
            if (currentday == 'Wed') {
                this.data.Mon = moment().subtract(2, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(1, 'days').format("YYYYMMDD");
                this.data.Wen = moment().format("YYYYMMDD");
                this.data.selecteddate = moment().format("YYYYMMDD");
                this.data.Thu = moment().add(1, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(2, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(3, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(4, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(2, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(4, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Thu') {

                this.data.Mon = moment().subtract(3, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(2, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(1, 'days').format("YYYYMMDD");
                this.data.Thu = moment().format("YYYYMMDD");
                this.data.selecteddate = moment().format("YYYYMMDD");
                this.data.Fri = moment().add(1, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(2, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(3, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(3, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(3, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Fri') {
                this.data.Mon = moment().subtract(4, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(3, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(2, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(1, 'days').format("YYYYMMDD");
                this.data.Fri = moment().format("YYYYMMDD");
                this.data.selecteddate = moment().format("YYYYMMDD");
                this.data.Sat = moment().add(1, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(2, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(4, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(2, 'days').format('MMMM Do YYYY'); //{Sun

            }
            if (currentday == 'Sat') {
                this.data.Mon = moment().subtract(5, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(4, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(3, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(2, 'days').format("YYYYMMDD");
                this.data.Fri = moment().subtract(1, 'days').format("YYYYMMDD");
                this.data.Sat = moment().format("YYYYMMDD");
                this.data.selecteddate = moment().format("YYYYMMDD");
                this.data.Sun = moment().add(1, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(5, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(1, 'days').format('MMMM Do YYYY'); //{Sun

            }
            if (currentday == 'Sun') {
                this.data.Mon = moment().subtract(6, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(5, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(4, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(3, 'days').format("YYYYMMDD");
                this.data.Fri = moment().subtract(2, 'days').format("YYYYMMDD");
                this.data.Sat = moment().subtract(1, 'days').format("YYYYMMDD");
                this.data.Sun = moment().format("YYYYMMDD");
                this.data.selecteddate = moment().format("YYYYMMDD");
                this.data.StartDate = moment().subtract(6, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().format('MMMM Do YYYY'); //{Sun

            }
            count = 0;
        }
        





    }


    onBackButton(): boolean {
        //(Android) returns :
        // true - handle the event in App Hooks
        // false - stop the event propogation
        return true;
    }
    forwa() {
        if (count <= 28) {

            currentday = moment().format("ddd");
            if (currentday == 'Mon') {
                this.data.Mon = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().add(8 + count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().add(9 + count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().add(10 + count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(11 + count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(12 + count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(13 + count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().add(7 + count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(13 + count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Tue') {
                this.data.Mon = moment().add(6 + count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().add(8 + count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().add(9 + count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(10 + count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(11 + count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(12 + count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().add(6 + count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(12 + count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Wed') {
                this.data.Mon = moment().add(5 + count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().add(6 + count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().add(8 + count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(9 + count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(10 + count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(11 + count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().add(5 + count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(11 + count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Thu') {
                this.data.Mon = moment().add(4 + count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().add(5 + count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().add(6 + count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(8 + count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(9 + count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(10 + count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().add(4 + count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(10 + count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Fri') {
                this.data.Mon = moment().add(3 + count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().add(4 + count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().add(5 + count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().add(6 + count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(8 + count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(9 + count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().add(3 + count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(9 + count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Sat') {
                this.data.Mon = moment().add(4 + count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().add(5 + count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().add(6 + count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(8 + count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(9 + count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().add(9 + count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(10 + count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().add(4 + count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(10 + count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Sun') {
                this.data.Mon = moment().add(1 + count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().add(2 + count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().add(3 + count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().add(4 + count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().add(5 + count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().add(6 + count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().add(7 + count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().add(1 + count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().add(7 + count, 'days').format('MMMM Do YYYY'); //{Sun}
            }

            count += 7;
        }

    }

    backward() {
        if (count >= 7 && count <= 35) {
            currentday = moment().format("ddd");
            if (currentday == 'Mon') {
                this.data.Mon = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(6 - count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(5 - count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(4 - count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().subtract(3 - count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().subtract(2 - count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().subtract(1 - count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(7 - count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().subtract(1 - count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Tue') {
                this.data.Mon = moment().subtract(8 - count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(6 - count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(5 - count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().subtract(4 - count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().subtract(3 - count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().subtract(2 - count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(8 - count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().subtract(2 - count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Wed') {
                this.data.Mon = moment().subtract(9 - count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(8 - count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(6 - count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().subtract(5 - count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().subtract(4 - count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().subtract(3 - count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(9 - count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().subtract(3 - count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Thu') {
                this.data.Mon = moment().subtract(10 - count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(9 - count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(8 - count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().subtract(6 - count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().subtract(5 - count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().subtract(4 - count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(10 - count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().subtract(4 - count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Fri') {
                this.data.Mon = moment().subtract(11 - count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(10 - count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(9 - count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(8 - count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().subtract(6 - count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().subtract(5 - count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(11 - count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().subtract(5 - count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Sat') {
                this.data.Mon = moment().subtract(12 - count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(11 - count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(10 - count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(9 - count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().subtract(8 - count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().subtract(6 - count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().subtract(5 - count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().subtract(4 - count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(12 - count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().subtract(4 - count, 'days').format('MMMM Do YYYY'); //{Sun}
            }
            if (currentday == 'Sun') {
                this.data.Mon = moment().subtract(13 - count, 'days').format("YYYYMMDD");
                this.data.Tue = moment().subtract(12 - count, 'days').format("YYYYMMDD");
                this.data.Wen = moment().subtract(11 - count, 'days').format("YYYYMMDD");
                this.data.Thu = moment().subtract(10 - count, 'days').format("YYYYMMDD");
                this.data.Fri = moment().subtract(9 - count, 'days').format("YYYYMMDD");
                this.data.Sat = moment().subtract(8 - count, 'days').format("YYYYMMDD");
                this.data.Sun = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.selecteddate = moment().subtract(7 - count, 'days').format("YYYYMMDD");
                this.data.StartDate = moment().subtract(13 - count, 'days').format('MMMM Do YYYY'); //{Mon}
                this.data.EndDate = moment().subtract(7 - count, 'days').format('MMMM Do YYYY'); //{Sun}
            }


            count -= 7;
        }

    }




    demo(Day, fetchdate) {

        this.data.Days = Day;
        currentday = moment().format("ddd");
        this.data.selecteddate = fetchdate;

    }

    //this.action('display');

    check() {
        this.data.sameforalldays = !this.data.sameforalldays;
    }
    submitclicked() {
        if (this.data.sameforalldays == true) {

            this.action('sameforallday');
        }
        else {
            this.action('Submit');
        }
    }

}


