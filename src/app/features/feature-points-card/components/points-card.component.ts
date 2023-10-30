import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../shared/models/base-component.service";
import {LocalStorageService} from "../../../local-storage.service";
import {Router} from "@angular/router";
import {localStorageKeys} from "../../../shared/data/local-storage-keys";
import {appRoutes} from "../../../shared/data/app-routes";

@Component({
  selector: 'app-points-card',
  templateUrl: './points-card.component.html',
  styleUrls: ['./points-card.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class PointsCardComponent extends BaseComponent {
  protected readonly pointsAmount = this.localStorageService.getItem(localStorageKeys.scoreWidgetKey)

  constructor(
    private router: Router,
    protected readonly localStorageService: LocalStorageService
  ) {
    super();
  }
  override click(event: Event) {
    super.click(event);
    this.router.navigate([appRoutes.pointsCardPage])
    // @ts-ignore
    Telegram.WebApp.HapticFeedback.notificationOccurred("success")
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
