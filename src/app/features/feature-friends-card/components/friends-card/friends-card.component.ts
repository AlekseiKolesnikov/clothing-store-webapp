import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {NavigateFeedbackModel} from "../../../../shared/models/telegram-ui/navigate-feedback-model";
import {FRIENDS_CARD_PAGE} from "../../../../shared/data/app-routes";

@Component({
  selector: 'app-friends-card',
  templateUrl: './friends-card.component.html',
  styleUrls: ['./friends-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FriendsCardComponent extends BaseComponent {
  constructor(
    private readonly hapticFeedback: NavigateFeedbackModel
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
    this.hapticFeedback.feedbackNavigate(FRIENDS_CARD_PAGE)
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
