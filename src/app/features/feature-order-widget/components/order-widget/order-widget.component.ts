import {Component, ViewEncapsulation} from '@angular/core';
import {orderWidgetData} from "../../data/order-widget-data";
import {BaseComponent} from "../../../../shared/models/base-component.service";
import {Router} from "@angular/router";
import {appRoutes} from "../../../../shared/data/app-routes";

@Component({
  selector: 'app-order-widget',
  templateUrl: './order-widget.component.html',
  styleUrls: ['./order-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderWidgetComponent extends BaseComponent {
  protected readonly fullArrowIcon = orderWidgetData.fullArrowIcon

  constructor(
    private router: Router
  ) {
    super();
  }
  override click(event: Event) {
    super.click(event);
    this.router.navigate([appRoutes.orderWidgetPage])
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
