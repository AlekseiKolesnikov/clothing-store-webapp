import {Component, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../local-storage.service";
import {AppRoutesService} from "../../../shared/services/app-routes.service";
import {LocalStorageKeysService} from "../../../shared/services/local-storage-keys.service";

@Component({
  selector: 'app-points-card-page',
  templateUrl: './points-card-page.component.html',
  styleUrls: ['./points-card-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PointsCardPageComponent {
  protected readonly pointsAmount = this.localStorageService
    .getItem(this.localStorageKeysService.getKey().pointsCardKey)
  protected mainPageRoute: string

  constructor(
    private appRoutesService: AppRoutesService,
    private readonly localStorageKeysService: LocalStorageKeysService,
    protected readonly localStorageService: LocalStorageService
  ) {
    this.mainPageRoute = this.appRoutesService.getRoutes().mainPage
  }
}
