import {Injectable} from "@angular/core";
import {Subscription} from "rxjs";
import {DeliveryDataService} from "./delivery-data.service";
import {LocalStorageService} from "../../../local-storage.service";
import {PERSONAL_FULL_NAME_KEY, PERSONAL_PHONE_NUMBER_KEY} from "../../../shared/data/local-storage-keys";

@Injectable({
  providedIn: 'root'
})
export class DataLocalStoreService {
  protected phoneNumber: string = ""
  protected fullName: string = ""
  protected deliveryData$: Subscription

  constructor(
    private readonly deliveryDataService: DeliveryDataService,
    private readonly localStorageService: LocalStorageService
  ) {
  }

  storeData(): void {
    this.localStorageService.setItem(PERSONAL_FULL_NAME_KEY, this.fullName)
    this.localStorageService.setItem(PERSONAL_PHONE_NUMBER_KEY, this.phoneNumber)
  }

  subscribe() {
    this.deliveryData$ = this.deliveryDataService.getDeliveryData().subscribe(data => {
      this.phoneNumber = data.phoneNumber
      this.fullName = data.fullName
    })
  }

  unsubscribe() {
    this.deliveryData$.unsubscribe()
  }
}
