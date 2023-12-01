import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {NavigateFeedbackModel} from "../../../../shared/models/telegram-ui/navigate-feedback-model";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";
import {OrderPageService} from "../../services/order-page.service";

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderCardComponent extends BaseComponent {
  protected readonly fullArrowIcon = this.orderPageDataService.getData().fullArrowIcon
  protected orderPageRoute: string

  constructor(
    private appRoutesService: AppRoutesService,
    private readonly feedbackNavigate: NavigateFeedbackModel,
    private readonly orderPageDataService: OrderPageService
  ) {
    super();
    this.orderPageRoute = this.appRoutesService.getRoutes().orderCardPage
  }

  override click(event: Event) {
    super.click(event);
    this.feedbackNavigate.feedbackNavigate(this.orderPageRoute)
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
