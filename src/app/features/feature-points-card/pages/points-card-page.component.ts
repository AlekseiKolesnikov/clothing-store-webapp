import {Component, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../local-storage.service";
import {POINTS_CARD_KEY} from "../../../shared/data/local-storage-keys";
import {MAIN_PAGE} from "../../../shared/data/app-routes";

@Component({
  selector: 'app-points-card-page',
  templateUrl: './points-card-page.component.html',
  styleUrls: ['./points-card-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PointsCardPageComponent {
  protected readonly pointsAmount = this.localStorageService.getItem(POINTS_CARD_KEY)
  constructor(
    protected readonly localStorageService: LocalStorageService
  ) {}

  protected readonly MAIN_PAGE = MAIN_PAGE;
}
