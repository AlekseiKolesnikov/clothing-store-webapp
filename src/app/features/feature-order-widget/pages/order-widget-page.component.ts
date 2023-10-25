import {Component, ViewEncapsulation} from '@angular/core';
import {orderWidgetData} from "../data/order-widget-data";

@Component({
  selector: 'app-order-widget-page',
  templateUrl: './order-widget-page.component.html',
  styleUrls: ['./order-widget-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderWidgetPageComponent {
  protected readonly orderWidgetData = orderWidgetData
}
