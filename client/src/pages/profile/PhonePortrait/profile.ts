import { Component } from '@angular/core';
import { Screen } from 'app/screen';
declare var window: any;

@Component({
  selector: 'screen-profile-phoneportrait',
  templateUrl: 'profile.html'
})
export class profile_PhonePortrait extends Screen {
  data: any;

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
    if (window.SafariViewController) {
        window.SafariViewController.hide();
        console.log('SafariViewController.hide called.');
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  onDataLoad(data: any): void {
    // Logic to run when the screen's data is updated goes here.
  }
  onBackButton(): boolean {
    //(Android) returns :
    // true - handle the event in App Hooks
    // false - stop the event propogation
      return true;
  }

  openMap(): void {
      this.global.profileData = this.data.user;
      this.navigationService.go('mapview');
  }

  async saveProfile(form) {
      if (form.valid) {
          await this.action('done');
      } else {
          this.parseFormErrors(form);
      }
  }

  private parseFormErrors(form) {
      let errors = [];
      const errorMessages = [];
      Object.keys(form.controls).forEach(key => {
          const controlErrors = form.controls[key].errors;
          if (controlErrors != null) {
              Object.keys(controlErrors).forEach(keyError => {
                  errors.push(keyError);
              });
          }
      });
      errors = [...new Set(errors)];
      errors.forEach(error => {
          if (!errorMessages.length && error === 'required') {
              errorMessages.push('Fill in all the required fields.');
          }
          if (!errorMessages.length && error === 'email') {
              errorMessages.push('Email is not correct.');
          }
      });
      this.alert(errorMessages.join('\n'), { title: 'Save Error' });
  }
}
