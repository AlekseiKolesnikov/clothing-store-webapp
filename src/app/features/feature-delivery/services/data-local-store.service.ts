import {Injectable} from "@angular/core";
import {Subscription} from "rxjs";
import {DeliveryDataService} from "./delivery-data.service";
import {LocalStorageService} from "../../../local-storage.service";
import {
  DELIVERY_ADDRESS_KEY,
  DELIVERY_CITY_KEY,
  PERSONAL_FULL_NAME_KEY,
  PERSONAL_PHONE_NUMBER_KEY
} from "../../../shared/data/local-storage-keys";

@Injectable({
  providedIn: 'root'
})
export class DataLocalStoreService {
  protected city: string = ""
  protected address: string = ""
  protected deliveryData$: Subscription

  constructor(
    private readonly deliveryDataService: DeliveryDataService,
    private readonly localStorageService: LocalStorageService
  ) {
  }

  storeData(): void {
    if (this.localStorageService.getItem(DELIVERY_CITY_KEY) === null) {
      this.localStorageService.setItem(DELIVERY_CITY_KEY, this.city)
    }
    if (this.localStorageService.getItem(DELIVERY_ADDRESS_KEY) === null) {
      this.localStorageService.setItem(DELIVERY_ADDRESS_KEY, this.address)
    }
    if (this.localStorageService.getItem(PERSONAL_FULL_NAME_KEY) === null) {

    }
    if (this.localStorageService.getItem(PERSONAL_PHONE_NUMBER_KEY) === null) {

    }
  }

  subscribe() {
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.city = data.city
      this.address = data.address
    })
  }

  unsubscribe() {
    this.deliveryData$.unsubscribe()
  }
}
