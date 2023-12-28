import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {LocalStorageKeysService} from "./shared/services/local-storage-keys.service";
import {PointsCardService} from "./features/feature-points-card/services/points-card.service";

@Injectable({
  providedIn: 'root'
})
export class InitializeMainData {
  protected pointsCardKey: string
  protected pointsCardData: number

  constructor(
    private localStorageService: LocalStorageService,
    private localStorageKeysService: LocalStorageKeysService,
    private pointsCardDataService: PointsCardService
  ) {
    this.pointsCardKey = this.localStorageKeysService.POINTS_CARD_KEY
    this.pointsCardData = this.pointsCardDataService.getPoints()
  }

  initialize() {
    this.localStorageService.setItem(this.pointsCardKey, this.pointsCardData)
  }
}
