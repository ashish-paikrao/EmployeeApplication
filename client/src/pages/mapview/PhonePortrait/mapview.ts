import { Component, ChangeDetectorRef, ViewChild, Renderer } from '@angular/core';
import { Screen } from 'app/screen';
import { Searchbar } from 'ionic-angular';
declare var window: any;

@Component({
  selector: 'screen-mapview-phoneportrait',
  templateUrl: 'mapview.html'
})
export class mapview_PhonePortrait extends Screen {
  data: any;
  closeDisabled: boolean;
  @ViewChild('searchbar') searchbar: Searchbar;

  constructor(private chRef: ChangeDetectorRef, private renderer: Renderer) {
      super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
    this.data.mapInput = {
        Latitude: this.global.profileData.latitude,
        Longitude: this.global.profileData.longitude,
        Address: this.global.profileData.address
    };
    this.data.AddressSearch = this.global.profileData.address;
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

  onBlur(event): void {
      this.closeDisabled = false;
      this.data.mapInput.Address = event._value;
  }

  onFocus(event): void {
      this.closeDisabled = true;
  }

  onSearch(event): void {
      this.data.mapInput.Address = event.target.value;
      setTimeout(() => {
          this.deferredBlur();
      }, 200);
  }

  deferredBlur(): void {
      this.renderer.invokeElementMethod(this.searchbar._searchbarInput.nativeElement, 'blur');
  }

  onMarkerMoved({ lat, lng, address, formattedAddress, source }): void {
    this.global.profileData.latitude = lat;
    this.global.profileData.longitude = lng;
    this.global.profileData.address = formattedAddress;
    this.data.AddressSearch = formattedAddress;
    this.chRef.detectChanges();
  }
}
