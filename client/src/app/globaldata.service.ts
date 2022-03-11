import {Injectable} from "@angular/core";

@Injectable()
export class GlobalData {
  /**
   * Put any global data values you want to use across screens here, e.g.:
   *
   * myValue: string;
   *
   * Use "global.myValue" to refer to it in your screen template, or this.global.myValue in your controller.
   */
    profileData: any;
    onetimeonly = 0;
    floor;
    row;
    column;
    fetchDate;
}
