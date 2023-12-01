import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {LocalStorageKeysService} from "./shared/services/local-storage-keys.service";
import {ChannelIconService} from "./features/feature-header/services/channel-icon.service";
import {ProfileDataService} from "./features/feature-header/services/profile-data.service";
import {PointsCardService} from "./features/feature-points-card/services/points-card.service";

@Injectable({
  providedIn: 'root'
})
export class InitializeMainData {
  protected channelIconKey: string
  protected profileKey: string
  protected pointsCardKey: string
  protected channelIconData: object
  protected profileData: object
  protected pointsCardData: number

  constructor(
    private localStorageService: LocalStorageService,
    private localStorageKeysService: LocalStorageKeysService,
    private channelIconDataService: ChannelIconService,
    private profileDataService: ProfileDataService,
    private pointsCardDataService: PointsCardService
  ) {
    this.channelIconKey = this.localStorageKeysService.getKey().channelIconKey
    this.profileKey = this.localStorageKeysService.getKey().profileKey
    this.pointsCardKey = this.localStorageKeysService.getKey().pointsCardKey
    this.channelIconData = this.channelIconDataService.getData()
    this.profileData = this.profileDataService.getData()
    this.pointsCardData = this.pointsCardDataService.getPoints()
  }

  initialize() {
    this.localStorageService.setItem(this.channelIconKey, this.channelIconData)
    this.localStorageService.setItem(this.profileKey, this.profileData)
    this.localStorageService.setItem(this.pointsCardKey, this.pointsCardData)
  }
}
