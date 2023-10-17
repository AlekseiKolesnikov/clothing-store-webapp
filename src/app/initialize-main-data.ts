import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {channelIconData} from "./core/data/channel-icon-data";
import {profileData} from "./core/data/profile-data";

@Injectable({
  providedIn: 'root'
})
export class InitializeMainData {
  private readonly channelIconData = channelIconData
  private readonly profileData = profileData
  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  initialize() {
    this.localStorageService.setItem('channelIconData', this.channelIconData)
    this.localStorageService.setItem('profileData', this.profileData)
  }
}
