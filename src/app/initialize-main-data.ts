import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {channelIconData} from "./features/feature-header/data/channel-icon.data";
import {profileData} from "./features/feature-header/data/profile.data";
import {articlesCardData} from "./features/feature-article-card/data/articles-card-data";
import {localStorageKeys} from "./shared/data/local-storage-keys";
import {pointsCardData} from "./features/feature-points-card/data/points-card.data";

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
    this.localStorageService.setItem(localStorageKeys.articleCardsKey, articlesCardData)
    this.localStorageService.setItem(localStorageKeys.scoreWidgetKey, pointsCardData)
  }
}
