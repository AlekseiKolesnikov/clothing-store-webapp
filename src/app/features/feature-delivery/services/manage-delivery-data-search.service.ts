import {Injectable} from "@angular/core";
import {CitiesHandlerService} from "./cities-handler.service";
import {AddressesHandlerService} from "./addresses-handler.service";
import {DeliveryDataService} from "./delivery-data.service";
import {DELIVERY_ADDRESS_KEY, DELIVERY_CITY_KEY} from "../../../shared/data/local-storage-keys";
import {LocalStorageService} from "../../../local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ManageDeliveryDataSearchService {
  constructor(
    private readonly citiesHandlerService: CitiesHandlerService,
    private readonly addressesHandlerService: AddressesHandlerService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly localStorageService: LocalStorageService
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
      this.localStorageService.setItem(DELIVERY_CITY_KEY, pickedItem)
    } else {
      this.deliveryDataService.setAddress(pickedItem)
      this.localStorageService.setItem(DELIVERY_ADDRESS_KEY, pickedItem)
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
