import { Component } from '@angular/core';
import { Screen } from 'app/screen';
declare var window: any;
import * as moment from 'moment-timezone';

@Component({
  selector: 'screen-snackandlunchoption-phoneportrait',
  templateUrl: 'snackandlunchoption.html'
})
export class snackandlunchoption_PhonePortrait extends Screen {
    data: any;
    storeTemperatures: any;
    //@ViewChild('content') content;

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
    this.data.snack = 0;
    this.data.lunch = 0;
    this.storeTemperatures = this.data.userBooking;
  
    }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  onDataLoad(data: any): void {
    // Logic to run when the screen's data is updated goes here.
      this.data.selectedDesk = 'F'+this.global.floor + 'R'+this.global.row + 'D'+this.global.column;    
  }
  onBackButton(): boolean {
    //(Android) returns :
    // true - handle the event in App Hooks
    // false - stop the event propogation
      return true;
  }
  adduser(item) {
      this.data.Book_for_other_userID = this.data.userBooking[item].userID;
      this.data.searchValue = this.data.userBooking[item].userName;
      this.search();
  }
  search() {
      //this.content.scrollToTop();
      const value = this.data.searchValue.toLocaleLowerCase();
      this.data.userBooking = [];
      if (value) {
          for (let item of this.storeTemperatures) {
              if (item.userName.toLocaleLowerCase().includes(value)) {
                  this.data.userBooking.push(item);
              }
          }
      } else {
          this.data.userBooking = this.storeTemperatures;
      }
  }

}
