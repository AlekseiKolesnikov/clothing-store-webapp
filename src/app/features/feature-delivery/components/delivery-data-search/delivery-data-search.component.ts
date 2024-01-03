import {Component, Input, OnDestroy, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {CitiesHandlerService} from "../../services/cities-handler.service";
import {AddressesHandlerService} from "../../services/addresses-handler.service";
import {Location} from "@angular/common";
import {DataLocalStoreService} from "../../services/data-local-store.service";

@Component({
  selector: 'app-delivery-data-search',
  templateUrl: './delivery-data-search.component.html',
  styleUrls: ['./delivery-data-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryDataSearchComponent extends BaseComponent implements OnDestroy {
  @Input() ngModelField: string
  @Input() dataArray: string[]
  @Input() searchOption: string
  @Input() inputLabel: string
  protected loaderState: boolean = false
  protected inputText: string = ''

  constructor(
    private readonly citiesHandlerService: CitiesHandlerService,
    private readonly addressesHandlerService: AddressesHandlerService,
    private readonly dataLocalStoreService: DataLocalStoreService,
    private readonly location: Location
  ) {
    super();
  }

  onInputChange() {
    this.loaderState = true
    setTimeout(() => {
      this.inputText = this.ngModelField
      this.loaderState = false
    }, 500)
    if (this.searchOption === "cities") {
      this.citiesHandlerService.getAllCities()
    }
    if (this.searchOption === "address") {
      this.addressesHandlerService.getAllAddresses()
    }
  }

  onClick(pickedItem: string) {
    this.dataLocalStoreService.storeDeliveryData(pickedItem, this.searchOption)
    this.location.back()
  }

  ngOnDestroy() {
    if (this.searchOption === "cities") {
      this.citiesHandlerService.unsubscribe()
    }
    if (this.searchOption === "address") {
      this.addressesHandlerService.unsubscribe()
    }
  }
}
