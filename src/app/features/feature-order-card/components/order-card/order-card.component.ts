import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {NavigateFeedbackModel} from "../../../../shared/models/telegram-ui/navigate-feedback-model";
import {ORDER_CARD_PAGE} from "../../../../shared/data/app-routes";

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderCardComponent extends BaseComponent {
  constructor(
    private readonly feedbackNavigate: NavigateFeedbackModel
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
    this.feedbackNavigate.feedbackNavigate(ORDER_CARD_PAGE)
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
