import {Component, ViewEncapsulation} from '@angular/core';
import {localStorageKeys} from "../../../shared/data/local-storage-keys";
import {LocalStorageService} from "../../../local-storage.service";
import {appRoutes} from "../../../shared/data/app-routes";

@Component({
  selector: 'app-points-card-page',
  templateUrl: './points-card-page.component.html',
  styleUrls: ['./points-card-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PointsCardPageComponent {
  protected readonly pointsAmount = this.localStorageService.getItem(localStorageKeys.scoreWidgetKey)
  constructor(
    protected readonly localStorageService: LocalStorageService
  ) {
  }

  protected readonly appRoutes = appRoutes;
}
