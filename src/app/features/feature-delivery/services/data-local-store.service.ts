import {Injectable} from "@angular/core";
import {Subscription} from "rxjs";
import {DeliveryDataService} from "./delivery-data.service";
import {LocalStorageService} from "../../../local-storage.service";
import {LocalStorageKeysService} from "../../../shared/services/local-storage-keys.service";

@Injectable({
  providedIn: 'root'
})
export class DataLocalStoreService {
  protected city: string = ""
  protected address: string = ""
  protected deliveryData$: Subscription
  protected cityKey: string = this.localStorageKeysService.DELIVERY_CITY_KEY
  protected addressKey: string = this.localStorageKeysService.DELIVERY_ADDRESS_KEY
  protected personalNameKey: string = this.localStorageKeysService.PERSONAL_FULL_NAME_KEY
  protected personalPhoneNumberKey: string = this.localStorageKeysService.PERSONAL_PHONE_NUMBER_KEY

  constructor(
    private readonly deliveryDataService: DeliveryDataService,
    private readonly localStorageService: LocalStorageService,
    private readonly localStorageKeysService: LocalStorageKeysService
  ) {
  }

  storeData(): void {
    if (this.localStorageService.getItem(this.cityKey) === null) {
      this.localStorageService.setItem(this.cityKey, this.city)
    }
    if (this.localStorageService.getItem(this.addressKey) === null) {
      this.localStorageService.setItem(this.addressKey, this.address)
    }
    if (this.localStorageService.getItem(this.personalNameKey) === null) {

    }
    if (this.localStorageService.getItem(this.personalPhoneNumberKey) === null) {

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
