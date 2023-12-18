import {Component, ViewEncapsulation} from '@angular/core';
import {OrderPageService} from "../services/order-page.service";

@Component({
  selector: 'app-order-card-page',
  templateUrl: './order-card-page.component.html',
  styleUrls: ['./order-card-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderCardPageComponent {
  protected readonly orderPageData = this.orderPageDataService.getData()

  constructor(
    private readonly orderPageDataService: OrderPageService
  ) {
  }
}
