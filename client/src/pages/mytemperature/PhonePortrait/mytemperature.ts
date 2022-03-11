import { Component } from '@angular/core';
import { Screen } from 'app/screen';
import * as moment from 'moment-timezone';
declare var window: any;

@Component({
  selector: 'screen-mytemperature-phoneportrait',
  templateUrl: 'mytemperature.html'
})
export class mytemperature_PhonePortrait extends Screen {
  data: any;

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
    this.data.temperatures = this.data.temperatures || [];
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  onDataLoad(data: any): void {
    // Logic to run when the screen's data is updated goes here.
    for (let item of this.data.temperatures) {
        this.humanizeDate(item, 'date');
    }
  }
  onBackButton(): boolean {
    //(Android) returns :
    // true - handle the event in App Hooks
    // false - stop the event propogation
      return true;
  }

  private humanizeDate(obj, prop) {
      const date = moment(obj[prop]);
      if (!date.isValid()) return;
      const fromNow = date.fromNow();
      obj[prop] = date.calendar(null, {
          lastWeek: () => {
              return "[" + date.format('DD/MM/YYYY') + "]";
          },
          lastDay: '[Yesterday]',
          sameDay: '[' + date.format('LT') +']',
          sameElse: () => {
              return "[" + date.format('DD/MM/YYYY') + "]";
          }
      });
  }
}
