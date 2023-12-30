import {Component} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {AddressesHandlerService} from "../../services/addresses-handler.service";

@Component({
  selector: 'app-distribution-address-page',
  templateUrl: './distribution-address-page.component.html',
  styleUrls: ['./distribution-address-page.component.scss']
})
export class DistributionAddressPageComponent extends BaseComponent{
  protected address: string = ''
  protected addressesArray: string[] = []
  constructor(
    private readonly addressesHandlerService: AddressesHandlerService
  ) {
    super();
    this.addressesHandlerService.getSubscription().subscribe(data => {
        this.addressesArray = data
    })
  }
}
