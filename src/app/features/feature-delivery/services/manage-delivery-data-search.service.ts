import {Injectable} from "@angular/core";
import {CitiesHandlerService} from "./cities-handler.service";
import {AddressesHandlerService} from "./addresses-handler.service";
import {DeliveryDataService} from "./delivery-data.service";
import {DELIVERY_ADDRESS_KEY, DELIVERY_CITY_KEY} from "../../../shared/data/local-storage-keys";
import {LocalStorageService} from "../../../local-storage.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {PRODUCT_PAGE} from "../../../shared/data/app-routes";

@Injectable({
  providedIn: 'root'
})
export class ManageDeliveryDataSearchService {
  constructor(
    private readonly citiesHandlerService: CitiesHandlerService,
    private readonly addressesHandlerService: AddressesHandlerService,
    private readonly deliveryDataService: DeliveryDataService,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router
  ) { }

  setDeliveryDataSubject(dataOption: string) {
    if (dataOption === "cities") {
      this.citiesHandlerService.setCitiesSubject()
    }
    if (dataOption === "address") {
      this.addressesHandlerService.setAddressesSubject()
    }
  }

  storeDeliveryData(dataOption: string, pickedItem: string, location: Location, itemId: number) {
    if (dataOption === "cities") {
      this.deliveryDataService.setCity(pickedItem)
      this.localStorageService.setItem(DELIVERY_CITY_KEY, pickedItem)
      location.back()
    }
    if (dataOption === "address") {
      this.deliveryDataService.setAddress(pickedItem)
      this.localStorageService.setItem(DELIVERY_ADDRESS_KEY, pickedItem)
      location.back()
    }
    if (dataOption === "product") {
      this.router.navigate([PRODUCT_PAGE], {
        queryParams: {
          id: itemId.toString()
        }
      })
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
