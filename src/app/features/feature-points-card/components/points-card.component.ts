import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../shared/models/base-component.model";
import {LocalStorageService} from "../../../local-storage.service";
import {NavigateFeedbackModel} from "../../../shared/models/telegram-ui/navigate-feedback-model";
import {POINTS_CARD_KEY} from "../../../shared/data/local-storage-keys";
import {POINTS_CARD_PAGE} from "../../../shared/data/app-routes";

@Component({
  selector: 'app-points-card',
  templateUrl: './points-card.component.html',
  styleUrls: ['./points-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PointsCardComponent extends BaseComponent {
  protected readonly pointsAmount = this.localStorageService.getItem(POINTS_CARD_KEY)
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly hapticFeedback: NavigateFeedbackModel
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
    this.hapticFeedback.feedbackNavigate(POINTS_CARD_PAGE)
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
