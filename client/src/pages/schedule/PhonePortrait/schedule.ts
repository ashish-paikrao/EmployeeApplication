import { Component } from '@angular/core';
import { Screen } from 'app/screen';
declare var window: any;

@Component({
  selector: 'screen-schedule-phoneportrait',
  templateUrl: 'schedule.html'
})
export class schedule_PhonePortrait extends Screen {
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
  }
  onBackButton(): boolean {
    //(Android) returns :
    // true - handle the event in App Hooks
    // false - stop the event propogation
      return true;
  }
  demo(Day)
  {
      
      this.data.Days = Day;

      //this.action('display');
      
       
    
  }
  radioclicked(options)
  {
      if (options=='first')
      {
          this.data.radioValue = 1;
          
      }
      if (options == 'second')
      {
          this.data.radioValue = 2;
          
      }
      if (options == 'full')
      {
          this.data.radioValue = 3;
         
      }
      if (options == 'None') {
          this.data.radioValue = 4;
         
      }

  }
  checkbox()
  {     
    
      this.data.Sameforallweeks = !this.data.Sameforallweeks
          
     
  }
  submitclicked()
  {
      if (this.data.Sameforallweeks == true)
      {
          this.action('sameforalldayssubmit');
          console.log(this.data.Sameforallweeks) 
      }
      else
      {
          this.action('Submit');
      }
  }
  forward()
  {
     
  }
  backward()
  {
      
  }
  
 
  

  
  
  
          
}

  
  
  

