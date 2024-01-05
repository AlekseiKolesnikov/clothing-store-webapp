import {Component, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../local-storage.service";
import {AppRoutesService} from "../../../shared/services/app-routes.service";
import {POINTS_CARD_KEY} from "../../../shared/data/local-storage-keys";

@Component({
  selector: 'app-points-card-page',
  templateUrl: './points-card-page.component.html',
  styleUrls: ['./points-card-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PointsCardPageComponent {
  protected readonly pointsAmount = this.localStorageService.getItem(POINTS_CARD_KEY)
  protected mainPageRoute: string

  constructor(
    private appRoutesService: AppRoutesService,
    protected readonly localStorageService: LocalStorageService
  ) {
    this.mainPageRoute = this.appRoutesService.getRoutes().mainPage
  }
}
