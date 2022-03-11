declare module 'app/globaldata.service' {
	export class GlobalData {
	    /**
	     * Put any global data values you want to use across screens here, e.g.:
	     *
	     * myValue: string;
	     *
	     * Use "global.myValue" to refer to it in your screen template, or this.global.myValue in your controller.
	     */
	    profileData: any;
	    onetimeonly: number;
	    floor: any;
	    row: any;
	    column: any;
	    fetchDate: any;
	}

}
declare module 'app/screen' {
	import { GlobalData } from 'app/globaldata.service';
	import { BaseScreen } from 'smartux-client';
	export class Screen extends BaseScreen {
	    protected global: GlobalData;
	}

}
declare module 'app/menu/menu' {
	import { Screen } from 'app/screen';
	export class MenuComponent extends Screen {
	}

}
declare module 'app/app.screens' {
	/***  Generated file, do not change.  */
	import { MenuComponent } from 'app/menu/menu';
	import { home_PhonePortrait } from 'app/../pages/home/PhonePortrait/home';
	import { profile_PhonePortrait } from 'app/../pages/profile/PhonePortrait/profile';
	import { question_PhonePortrait } from 'app/../pages/question/PhonePortrait/question';
	import { login_PhonePortrait } from 'app/../pages/login/PhonePortrait/login';
	import { mytemperature_PhonePortrait } from 'app/../pages/mytemperature/PhonePortrait/mytemperature';
	import { settings_PhonePortrait } from 'app/../pages/settings/PhonePortrait/settings';
	import { mapview_PhonePortrait } from 'app/../pages/mapview/PhonePortrait/mapview';
	import { answers_PhonePortrait } from 'app/../pages/answers/PhonePortrait/answers';
	import { oauthlogin_PhonePortrait } from 'app/../pages/oauthlogin/PhonePortrait/oauthlogin';
	import { oauthloginv2_PhonePortrait } from 'app/../pages/oauthloginv2/PhonePortrait/oauthloginv2';
	import { schedule_PhonePortrait } from 'app/../pages/schedule/PhonePortrait/schedule';
	import { homelogin_PhonePortrait } from 'app/../pages/homelogin/PhonePortrait/homelogin';
	import { bookingsytem_PhonePortrait } from 'app/../pages/bookingsytem/PhonePortrait/bookingsytem';
	import { floor2_PhonePortrait } from 'app/../pages/floor2/PhonePortrait/floor2';
	import { snackandlunchoption_PhonePortrait } from 'app/../pages/snackandlunchoption/PhonePortrait/snackandlunchoption';
	import { bookforother_PhonePortrait } from 'app/../pages/bookforother/PhonePortrait/bookforother';
	import { history_PhonePortrait } from 'app/../pages/history/PhonePortrait/history';
	import { deskinformation_PhonePortrait } from 'app/../pages/deskinformation/PhonePortrait/deskinformation';
	export class Screens {
	    static declarations: (typeof MenuComponent | typeof mapview_PhonePortrait)[];
	    static mapping: {
	        'home': {
	            PhonePortrait: typeof home_PhonePortrait;
	        };
	        'profile': {
	            PhonePortrait: typeof profile_PhonePortrait;
	        };
	        'question': {
	            PhonePortrait: typeof question_PhonePortrait;
	        };
	        'login': {
	            PhonePortrait: typeof login_PhonePortrait;
	        };
	        'mytemperature': {
	            PhonePortrait: typeof mytemperature_PhonePortrait;
	        };
	        'settings': {
	            PhonePortrait: typeof settings_PhonePortrait;
	        };
	        'mapview': {
	            PhonePortrait: typeof mapview_PhonePortrait;
	        };
	        'answers': {
	            PhonePortrait: typeof answers_PhonePortrait;
	        };
	        'oauthlogin': {
	            PhonePortrait: typeof oauthlogin_PhonePortrait;
	        };
	        'oauthloginv2': {
	            PhonePortrait: typeof oauthloginv2_PhonePortrait;
	        };
	        'schedule': {
	            PhonePortrait: typeof schedule_PhonePortrait;
	        };
	        'homelogin': {
	            PhonePortrait: typeof homelogin_PhonePortrait;
	        };
	        'bookingsytem': {
	            PhonePortrait: typeof bookingsytem_PhonePortrait;
	        };
	        'floor2': {
	            PhonePortrait: typeof floor2_PhonePortrait;
	        };
	        'snackandlunchoption': {
	            PhonePortrait: typeof snackandlunchoption_PhonePortrait;
	        };
	        'bookforother': {
	            PhonePortrait: typeof bookforother_PhonePortrait;
	        };
	        'history': {
	            PhonePortrait: typeof history_PhonePortrait;
	        };
	        'deskinformation': {
	            PhonePortrait: typeof deskinformation_PhonePortrait;
	        };
	    };
	}

}
declare module 'app/app.hooks' {
	import { AppHooks } from 'smartux-client';
	export class Hooks extends AppHooks {
	    /**
	    * Initial parameters to send to the server.
	    */
	    getServerInitParams(): Promise<any>;
	    /**
	     * Initialize the UI with data from the server.
	     */
	    initializeUI(params: any): void;
	    /**
	     * Override what happens when going to a new screen.
	     */
	    overrideStateHandler(oldScreen: string, newScreen: string, data: any): string;
	    /**
	     * Override what happens when a custom URL scheme is called.
	     *
	     * type - 'event' is currently the only supported type.
	     * name - Name of event, e.g. 'login.submit'
	     * data - JSON object containing URL data.
	     *
	     * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
	     *          false - Don't continue with the normal flow.
	     */
	    interceptCustomURLScheme(type: string, name: string, data: any): Promise<boolean>;
	    /**
	      * Override what happens when there is a push notification.
	      *
	      * data - JSON object containing Notification data
	      *
	      * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
	      *          false - Don't continue with the normal flow.
	      */
	    onPushNotification(data: any): Promise<boolean>;
	    /**
	     * Error when an internal Push Notification error occurs and the cache is aborted.
	     */
	    onPushNotificationError(e: Error): Promise<void>;
	    /**
	     * Override what happens when on a file download event
	     * params - information about the download
	     * url - the url to download the file
	     * Returns: true - Continue with normal flow, e.g. download and try to open with
	     *                   the default application/ social share plugin
	     *          false - Don't continue with the normal flow.
	     */
	    onDownloadFile(params: any, url: any): Promise<boolean>;
	    /**
	     * Override what happens when receive "message" event
	     */
	    onMessage(params: any): Promise<void>;
	    /**
	     * Override what happens when the back button is pressed (Android)
	     * Returns: true - continue with the normal flow, e.g. exit the application
	     *          false - Don't continue with the normal flow.
	     */
	    onBackButton(): boolean;
	    /**
	     * Override what happens when the application enters the background
	     * Returns: true - continue witht the normal flow, e.g disconnect after the time
	     *                  specified in config.ts
	     *          false - don't continue with the normal flow.
	    */
	    onPause(): boolean;
	    /**
	     * Override what happens when the application enters the foreground
	     * Returns: true - continue witht the normal flow, e.g reconnect if disconnected
	     *          false - don't continue with the normal flow.
	    */
	    onResume(): boolean;
	    /**
	     * Override what happens when a request comes in to switch applications
	     * Returns: true - continue with the normal flow, e.g prompt the user
	     *          false - don't prompt the user, ignore the request
	     */
	    onSwitchSessionRequest(): boolean;
	    /**
	     * Intercept a request to the server.  Return the boolean true to
	     * continue as normal, or false to indicate not to proceed with the normal flow.
	     */
	    interceptServerRequest(method: any, params: any, filesToUpload: any, context: any): Promise<boolean>;
	    /**
	    * Intercept a response from the server.  Return the boolean true to
	    * continue as normal, or false to indicate not to proceed with the normal flow.
	    */
	    interceptServerResponse(method: any, params: any): Promise<boolean>;
	    onOffline(isOffline: any): Promise<void>;
	    /**
	    * Determines if the app has the logic in order to be working offline
	    */
	    hasOfflineSupport(): boolean;
	}

}
declare module 'app/app.component' {
	import { Screen } from 'app/screen';
	import { Hooks } from 'app/app.hooks';
	import { TBootstrap } from 'smartux-client';
	export class ClientApp extends Screen {
	    constructor(bootstrap: TBootstrap, hooks: Hooks);
	}

}
declare module 'app/app.module' {
	export class AppModule {
	}

}
