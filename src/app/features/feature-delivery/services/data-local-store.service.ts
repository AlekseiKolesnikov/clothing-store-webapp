import {Injectable} from "@angular/core";
import {Subscription} from "rxjs";
import {DeliveryDataService} from "./delivery-data.service";
import {LocalStorageService} from "../../../local-storage.service";
import {LocalStorageKeysService} from "../../../shared/services/local-storage-keys.service";

@Injectable({
  providedIn: 'root'
})
export class DataLocalStoreService {
  protected fullName: string = ""
  protected phoneNumber: string = ""
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
