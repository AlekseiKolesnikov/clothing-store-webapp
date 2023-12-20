import {Component, Input, OnDestroy, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Location} from "@angular/common";
import {CitiesHandlerService} from "../../services/cities-handler.service";
import {DeliveryDataService} from "../../services/delivery-data.service";

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

  constructor(
    private readonly citiesHandlerService: CitiesHandlerService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly location: Location
  ) {
    super();
  }

  onInputChange() {
    if (this.searchOption === "cities") {
      this.citiesHandlerService.getAllCities()
    }
  }

  onClick(pickedItem: string) {
    if (this.searchOption === "cities") {
      this.deliveryDataService.setCity(pickedItem)
    }
    this.location.back()
  }

  ngOnDestroy() {
    this.citiesHandlerService.unsubscribe()
  }
}
