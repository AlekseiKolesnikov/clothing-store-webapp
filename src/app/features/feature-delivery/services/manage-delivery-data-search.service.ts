import {Injectable} from "@angular/core";
import {CitiesHandlerService} from "./cities-handler.service";
import {AddressesHandlerService} from "./addresses-handler.service";
import {DeliveryDataService} from "./delivery-data.service";
import {DELIVERY_ADDRESS_KEY, DELIVERY_CITY_KEY} from "../../../shared/data/local-storage-keys";
import {LocalStorageService} from "../../../local-storage.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {PRODUCT_PAGE} from "../../../shared/data/app-routes";
export const CITY_DATA_DELIVERY_OPTION = "cities"
export const ADDRESS_DATA_DELIVERY_OPTION = "address"
export const PRODUCT_DATA_OPTION = "product"

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
    if (dataOption === CITY_DATA_DELIVERY_OPTION) {
      this.citiesHandlerService.setCitiesSubject()
    }
    if (dataOption === ADDRESS_DATA_DELIVERY_OPTION) {
      this.addressesHandlerService.setAddressesSubject()
    }
  }

  storeDeliveryData(dataOption: string, pickedItem: string, location: Location, itemId: number) {
    if (dataOption === CITY_DATA_DELIVERY_OPTION) {
      this.deliveryDataService.setCity(pickedItem)
      this.localStorageService.setItem(DELIVERY_CITY_KEY, pickedItem)
      location.back()
    }
    if (dataOption === ADDRESS_DATA_DELIVERY_OPTION) {
      this.deliveryDataService.setAddress(pickedItem)
      this.localStorageService.setItem(DELIVERY_ADDRESS_KEY, pickedItem)
      location.back()
    }
    if (dataOption === PRODUCT_DATA_OPTION) {
      this.router.navigate([PRODUCT_PAGE], {
        queryParams: {
          id: itemId.toString()
        }
      })
    }
  }

  unsubscribe(dataOption: string) {
    if (dataOption === CITY_DATA_DELIVERY_OPTION) {
      this.citiesHandlerService.unsubscribe()
    }
    if (dataOption === ADDRESS_DATA_DELIVERY_OPTION) {
      this.addressesHandlerService.unsubscribe()
    }
  }
}
