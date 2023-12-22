import {Component, Input, OnDestroy, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {CitiesHandlerService} from "../../services/cities-handler.service";
import {DeliveryDataService} from "../../services/delivery-data.service";
import {AddressesHandlerService} from "../../services/addresses-handler.service";
import {Location} from "@angular/common";

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
    private readonly deliveryDataService: DeliveryDataService,
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
    if (this.searchOption === "cities") {
      this.deliveryDataService.setCity(pickedItem)
    }
    if (this.searchOption === "address") {
      this.deliveryDataService.setAddress(pickedItem)
    }
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
