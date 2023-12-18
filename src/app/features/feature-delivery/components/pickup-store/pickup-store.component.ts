import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {StoreLocationService} from "../../services/store-location.service";

@Component({
  selector: 'app-pickup-store',
  templateUrl: './pickup-store.component.html',
  styleUrls: ['./pickup-store.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PickupStoreComponent extends BaseComponent {
  protected storeLocationData = this.storeLocationDataService.getData()

  constructor(
    private readonly storeLocationDataService: StoreLocationService
  ) {
    super();
  }
  override click(event: Event) {
    super.click(event);
    // @ts-ignore
    Telegram.WebApp.openLink(this.storeLocationData.storeMapLink)
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
