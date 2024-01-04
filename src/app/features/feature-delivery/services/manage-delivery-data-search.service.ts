import {Injectable} from "@angular/core";
import {CitiesHandlerService} from "./cities-handler.service";
import {AddressesHandlerService} from "./addresses-handler.service";
import {DeliveryDataService} from "./delivery-data.service";

@Injectable({
  providedIn: 'root'
})
export class ManageDeliveryDataSearchService {
  constructor(
    private readonly citiesHandlerService: CitiesHandlerService,
    private readonly addressesHandlerService: AddressesHandlerService,
    private readonly deliveryDataService: DeliveryDataService
  ) { }

  setDeliveryDataSubject(dataOption: string) {
    if (dataOption === "cities") {
      this.citiesHandlerService.setCitiesSubject()
    }
    if (dataOption === "address") {
      this.addressesHandlerService.setAddressesSubject()
    }
  }

  storeDeliveryData(dataOption: string, pickedItem: string) {
    if (dataOption === "cities") {
      this.deliveryDataService.setCity(pickedItem)
    }
    if (dataOption === "address") {
      this.deliveryDataService.setAddress(pickedItem)
    }
  }

  unsubscribe(dataOption: string) {
    if (dataOption === "cities") {
      this.citiesHandlerService.unsubscribe()
    }
    if (dataOption === "address") {
      this.addressesHandlerService.unsubscribe()
    }
  }
}
