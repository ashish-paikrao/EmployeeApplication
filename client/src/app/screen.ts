import { GlobalData } from "./globaldata.service";
import { BaseScreen, DI, config } from "smartux-client";

config.onPauseTimeout = 8 * 60 * 1000;
config.loadingTimeout = 2 * 60 * 1000;
config.keepAliveTimeout = 1 * 60 * 1000;

export class Screen extends BaseScreen {
    protected global: GlobalData = DI.get<GlobalData>(GlobalData);
}
