import {Injectable} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {POINTS_CARD_KEY} from "./shared/data/local-storage-keys";
import {PointsCardService} from "./features/feature-points-card/services/points-card.service";

@Injectable({
  providedIn: 'root'
})
export class InitializeMainData {
  protected pointsCardKey: string
  protected pointsCardData: number

  constructor(
    private localStorageService: LocalStorageService,
    private pointsCardDataService: PointsCardService
  ) {
    this.pointsCardData = this.pointsCardDataService.getPoints()
  }

  initialize() {
    this.localStorageService.setItem(this.pointsCardKey, POINTS_CARD_KEY)
  }
}
