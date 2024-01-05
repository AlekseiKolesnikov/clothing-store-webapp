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
  protected fullName: string = ""
  protected phoneNumber: string = ""
  protected deliveryData$: Subscription

  constructor(
    private readonly deliveryDataService: DeliveryDataService,
    private readonly localStorageService: LocalStorageService
  ) {
  }

  storeDeliveryData(dataValue: string, dataType: string): void {
    if (dataType === "cities") {
      this.localStorageService.setItem(this.cityKey, dataValue)
    }
    if (dataType === "address") {
      this.localStorageService.setItem(this.addressKey, dataValue)
    }
  }

  storePersonalData(): void {
    this.localStorageService.setItem(this.personalNameKey, this.fullName)
    this.localStorageService.setItem(this.personalPhoneNumberKey, this.phoneNumber)
  }

  subscribe() {
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.fullName = data.fullName
      this.phoneNumber = data.phoneNumber
    })
  }

  unsubscribe() {
    this.deliveryData$.unsubscribe()
  }
}
