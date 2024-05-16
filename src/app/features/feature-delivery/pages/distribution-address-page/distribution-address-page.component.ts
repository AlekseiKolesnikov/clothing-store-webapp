import {Component, OnDestroy} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {AddressesHandlerService} from "../../services/addresses-handler.service";
import {Subscription} from "rxjs";
import {ISearchData} from "../../../../shared/interfaces/delivery-interfaces";

@Component({
  selector: 'app-distribution-address-page',
  templateUrl: './distribution-address-page.component.html',
  styleUrls: [
    './distribution-address-page.component.scss',
    './../../../../core/page/main-page.component.scss'
  ]
})
export class DistributionAddressPageComponent extends BaseComponent implements OnDestroy {
  protected address: string = ''
  protected addressesArray: ISearchData[] = []
  private readonly addressesHandler$: Subscription

  constructor(
    private readonly addressesHandlerService: AddressesHandlerService
  ) {
    super();
    this.addressesHandler$ = this.addressesHandlerService.getAddressesSubject().subscribe(data => {
      this.addressesArray = data
    })
  }

  ngOnDestroy() {
    this.addressesHandler$.unsubscribe()
  }
}
