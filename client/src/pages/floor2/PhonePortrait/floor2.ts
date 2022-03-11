import { Component } from '@angular/core';
import { Screen } from 'app/screen';
import * as moment from 'moment-timezone';
import { unitOfTime } from 'moment';
declare var window: any;
var count = 0;
let i, j;
@Component({
    selector: 'screen-floor2-phoneportrait',
    templateUrl: 'floor2.html'
})
export class floor2_PhonePortrait extends Screen {
    data: any;

    ngOnInit(): void {
        super.ngOnInit();
        
        // Logic to run when the screen loads goes here.
        for (i = 0; i < this.data.rowList.length; i++) {
            this.data.rowList[i].colList.length = this.data.rowList[i].totalColumns;
           // this.alert(this.data.rowList[i].colList.length);
        //     for (j = 0; j < this.data.rowList[i].colList.length; j++) {
        //       // this.data.rowList[0].colList[0].columnName = 'jay';
        //        console.log('#');
        //     }
        }
        this.data.totalDesks.length = this.data.rowList.length * this.data.rowList[0].totalColumns;
        for (i = 0; i < this.data.totalDesks.length; i++)
        {
            this.data.totalDesks[i].deskID = 'F' + this.data.selectedFloor + 'R' + 'C' + i % this.data.rowList[i].totalColumns;;
        }
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        // Logic to run when the screen unloads goes here.
    }

    onDataLoad(data: any): void {
        // Logic to run when the screen's data is updated goes here.
        this.data.selectedDate = moment().format("YYYY-MM-DD");

    }
    onBackButton(): boolean {
        //(Android) returns :
        // true - handle the event in App Hooks
        // false - stop the event propogation
        return true;
    }
    getName(i, j) {
         return this.data.rowList[0].colList[0] = j + 1;
    }
    //setTimeout(displaysnacklunch, 5000);
    
    forwa() {
        if (count <= 28) {
            this.data.selectedDate = moment().add(1 + count, 'days').format("YYYY-MM-DD");
        }
        count+=1
    }
    backward() {
        if (count >= 1 && count <= 35) {
            this.data.selectedDate = moment().subtract(1 - count, 'days').format("YYYY-MM-DD");
            //this.data.selectedDate= moment().subtract(1, 'days').calendar()
        }
        count-=1
    }
    getRow(i)
    {
        return i + 1;
    }
    getDeskID(i1,i)
    {
        this.global.row = i+1;
        this.global.column = i1 + 1;
        this.data.selectedDesk = 'F' + this.global.floor + 'R' + this.global.row + 'C' + this.global.column;
        this.data.selectedRow = this.global.row;
        this.data.selectedColumn = this.global.column;
        //this.alert(this.data.selectColumn);
        //this.data.Concat = this.data.selectRow.concat('R', this.data.selectColumn, 'C');
            //this.data.selectDesk = this.data.rowList[0].colList[0];
        this.action('getSnackandLunch');
           
    
    }
   
}