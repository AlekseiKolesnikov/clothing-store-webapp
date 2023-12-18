import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../shared/models/base-component.model";
import {LocalStorageService} from "../../../local-storage.service";
import {NavigateFeedbackModel} from "../../../shared/models/telegram-ui/navigate-feedback-model";
import {AppRoutesService} from "../../../shared/services/app-routes.service";
import {LocalStorageKeysService} from "../../../shared/services/local-storage-keys.service";

@Component({
  selector: 'app-points-card',
  templateUrl: './points-card.component.html',
  styleUrls: ['./points-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PointsCardComponent extends BaseComponent {
  protected readonly pointsAmount = this.localStorageService
    .getItem(this.localStorageKeysService.getKey().pointsCardKey)
  protected pointsPageRoute: string

  constructor(
    private readonly appRoutesService: AppRoutesService,
    private readonly localStorageKeysService: LocalStorageKeysService,
    private readonly localStorageService: LocalStorageService,
    private readonly hapticFeedback: NavigateFeedbackModel
  ) {
    super();
    this.pointsPageRoute = this.appRoutesService.getRoutes().pointsCardPage
  }

  override click(event: Event) {
    super.click(event);
    this.hapticFeedback.feedbackNavigate(this.pointsPageRoute)
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
