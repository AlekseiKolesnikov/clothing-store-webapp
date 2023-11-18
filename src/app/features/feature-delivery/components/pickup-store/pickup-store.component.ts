import {Component, ViewEncapsulation} from '@angular/core';
import {deliveryPageData} from "../../data/delivery-page.data";
import {BaseComponent} from "../../../../shared/models/base-component.service";

@Component({
  selector: 'app-pickup-store',
  templateUrl: './pickup-store.component.html',
  styleUrls: ['./pickup-store.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PickupStoreComponent extends BaseComponent {
  override click(event: Event) {
    super.click(event);
    // @ts-ignore
    Telegram.WebApp.openLink(deliveryPageData.storeMapLink)
  }

  override touch(event: Event) {
    super.touch(event);
  }

  protected readonly deliveryPageData = deliveryPageData;
}
