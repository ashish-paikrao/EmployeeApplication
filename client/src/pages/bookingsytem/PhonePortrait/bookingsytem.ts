import { Component } from '@angular/core';
import { Screen } from 'app/screen';
import * as moment from 'moment-timezone';
declare var window: any;

@Component({
  selector: 'screen-bookingsytem-phoneportrait',
  templateUrl: 'bookingsytem.html'
})
export class bookingsytem_PhonePortrait extends Screen {
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
      this.data.selectedDate = moment().format("YYYY-MM-DD");
      this.global.fetchDate = this.data.selectedDate;

  }
  onBackButton(): boolean {
    //(Android) returns :
    // true - handle the event in App Hooks
    // false - stop the event propogation
      return true;
  }
  Gotofloorpage(i) {
      this.data.floorNo = i + 1;
      this.global.floor = i + 1;
      this.action('totalFloor[item].floorClick', [i]);
      
  }
 
}
