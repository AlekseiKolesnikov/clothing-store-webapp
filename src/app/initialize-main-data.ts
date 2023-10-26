import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {channelIconData} from "./features/feature-header/data/channel-icon-data";
import {profileData} from "./features/feature-header/data/profile-data";
import {articlesWidgetsData} from "./features/feature-article-widgets/data/articles-widgets-data";
import {localStorageKeys} from "./shared/data/local-storage-keys";
import {scoreWidgetData} from "./features/feature-score-widget/data/score-widget.data";

@Injectable({
  providedIn: 'root'
})
export class InitializeMainData {
  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  initialize() {
    this.localStorageService.setItem(localStorageKeys.channelIconKey, channelIconData)
    this.localStorageService.setItem(localStorageKeys.profileKey, profileData)
    this.localStorageService.setItem(localStorageKeys.articleWidgetsKey, articlesWidgetsData)
    this.localStorageService.setItem(localStorageKeys.scoreWidgetKey, scoreWidgetData)
  }
}
