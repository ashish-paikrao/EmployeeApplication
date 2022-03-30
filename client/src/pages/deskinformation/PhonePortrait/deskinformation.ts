import { Component } from '@angular/core';
import { Screen } from 'app/screen';
import * as moment from 'moment-timezone';
declare var window: any;
var i,j,count=0;
@Component({
  selector: 'screen-deskinformation-phoneportrait',
  templateUrl: 'deskinformation.html'
})
export class deskinformation_PhonePortrait extends Screen {
  data: any;

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
    
    for (i = 0; i < this.data.deskInfo.length; i++) {
        if (this.data.bookedInformation != null) {

            for (j = 0; j < this.data.bookedInformation.length; j++) {
                if (this.data.deskInfo[i].deskID == this.data.bookedInformation[j].deskID) {
                    this.data.deskInfo[i].ocuupied = "1";
                    // this.alert(i+'adsfafs' + this.data.deskInfo[i].ocuupied);
                    console.log(this.data.deskInfo[i].ocuupied + '/////////////////////////');
                }
            }
        }
    }
    // this.alert(this.data.bookedInformation.length);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
    count = 0;
    this.global.fetchDate = this.data.constantDate;
  }

  onDataLoad(data: any): void {
    // Logic to run when the screen's data is updated goes here.
      this.data.dateSelected = this.global.fetchDate;
      this.data.constantDate = moment().format("YYYY-MM-DD");
   
  }
  onBackButton(): boolean {
    //(Android) returns :
    // true - handle the event in App Hooks
    // false - stop the event propogation
      return true;
  }
  forwa() {
      if (count <= 28) {
          this.data.dateSelected = moment().add(1 + count, 'days').format("YYYY-MM-DD");
          count += 1
        //   this.action('refreshContent');    
          this.global.fetchDate = this.data.dateSelected;
          this.action('refreshContent');
          for (i = 0; i < this.data.deskInfo.length; i++) {
              if (this.data.bookedInformation != null) {
                  for (j = 0; j < this.data.bookedInformation.length; j++) {
                      if (this.data.deskInfo[i].deskID == this.data.bookedInformation[j].deskID) {
                          this.data.deskInfo[i].ocuupied = "1";
                          // this.alert(i+'adsfafs' + this.data.deskInfo[i].ocuupied);
                          console.log(this.data.deskInfo[i].ocuupied + '/////////////////////////');
                      }
                  }
              }
          }
               
      }
      this.content.resize();
      //this.ngOnInit();
      
  }
  backward() {
      if (count >= 1 && count <= 35) {
          this.data.dateSelected = moment().subtract(1 - count, 'days').format("YYYY-MM-DD");
          count -= 1
          this.global.fetchDate = this.data.dateSelected;
          this.action('refreshContent');
          for (i = 0; i < this.data.deskInfo.length; i++) {
              if (this.data.bookedInformation != null) {

                  for (j = 0; j < this.data.bookedInformation.length; j++) {
                      if (this.data.deskInfo[i].deskID == this.data.bookedInformation[j].deskID) {
                          this.data.deskInfo[i].ocuupied = "1";
                          // this.alert(i+'adsfafs' + this.data.deskInfo[i].ocuupied);
                          console.log(this.data.deskInfo[i].ocuupied + '/////////////////////////');
                      }
                  }
              }
          }
        //   this.reload();
          
          //this.data.selectedDate= moment().subtract(1, 'days').calendar()
      }
      
  }
  getDeskID(i) {
      this.global.row = parseInt(this.data.deskInfo[i].deskRow);
      this.global.column = parseInt(this.data.deskInfo[i].deskColumn);
      //this.data.selectedDesk = 'F' + this.global.floor + 'R' + this.global.row + 'C' + this.global.column;
      this.data.selectedDesk = this.data.deskInfo[i].deskID;
      this.data.selectedRow = this.global.row;
      this.data.selectedColumn = this.global.column;
      if (this.data.deskInfo[i].occupied == '1')
      {
          this.alert("This desk is already booked please select another desk");
      }
      else {
          this.alert("In else");
          this.action('passData');
          
      }

  }
}
