import {Component, ViewEncapsulation} from '@angular/core';
import {orderCardData} from "../../data/order-card.data";
import {BaseComponent} from "../../../../shared/models/base-component.service";
import {Router} from "@angular/router";
import {appRoutes} from "../../../../shared/data/app-routes";

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderCardComponent extends BaseComponent {
  protected readonly fullArrowIcon = orderCardData.fullArrowIcon

  constructor(
    private router: Router
  ) {
    super();
  }
  override click(event: Event) {
    super.click(event);
    this.router.navigate([appRoutes.orderCardPage])
    // @ts-ignore
    Telegram.WebApp.HapticFeedback.notificationOccurred("success")
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
