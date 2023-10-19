import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {channelIconData} from "./features/feature-header/data/channel-icon-data";
import {profileData} from "./features/feature-header/data/profile-data";
import {articlesWidgetsData} from "./features/feature-article-widget/data/articles-widgets-data";

@Injectable({
  providedIn: 'root'
})
export class InitializeMainData {
  private readonly channelIconData = channelIconData
  private readonly profileData = profileData
  private readonly  articlesWidgetsData = articlesWidgetsData
  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  initialize() {
    this.localStorageService.setItem('channelIconData', this.channelIconData)
    this.localStorageService.setItem('profileData', this.profileData)
    this.localStorageService.setItem('articleWidgetData', this.articlesWidgetsData)
  }
}
