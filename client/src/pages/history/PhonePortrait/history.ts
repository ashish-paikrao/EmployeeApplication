import { Component, ViewChild } from '@angular/core';
import { Screen } from 'app/screen';
import * as moment from 'moment-timezone';
declare var window: any;

@Component({
  selector: 'screen-history-phoneportrait',
  templateUrl: 'history.html'
})
export class history_PhonePortrait extends Screen {
    data: any;
    storeTemperatures: any;
    @ViewChild('content') content;

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
    this.storeTemperatures = this.data.userBooking;
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  onDataLoad(data: any): void {
    // Logic to run when the screen's data is updated goes here.
      for (let item of this.data.userBooking) {
        this.humanizeDate(item, 'date');
    }
  }
  onBackButton(): boolean {
    //(Android) returns :
    // true - handle the event in App Hooks
    // false - stop the event propogation
      return true;
  }

  search() {
      this.content.scrollToTop();
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

  async openHistoryItem(formId) {
    this.data.formId = formId;
    await this.action('processEmployeeByFormId');
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
