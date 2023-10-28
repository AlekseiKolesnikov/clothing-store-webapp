import {Component, ViewEncapsulation} from '@angular/core';
import {orderCardData} from "../data/order-card.data";

@Component({
  selector: 'app-order-card-page',
  templateUrl: './order-card-page.component.html',
  styleUrls: ['./order-card-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderCardPageComponent {
  protected readonly orderWidgetData = orderCardData
}
