import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "../../../local-storage.service";
import {PERSONAL_FULL_NAME_KEY, PERSONAL_PHONE_NUMBER_KEY} from "../../../shared/data/local-storage-keys";

interface IDeliveryData {
  fullName: string,
  phoneNumber: string,
  city: string,
  address: string
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryDataService {
  private readonly fullNameStorageValue = () => {
    const fullName = this.localStorageService.getItem(PERSONAL_FULL_NAME_KEY)
    return fullName !== "" || null ? fullName : ""
  }
  private readonly phoneNumberStorageValue = () => {
    const phoneNumber = this.localStorageService.getItem(PERSONAL_PHONE_NUMBER_KEY)
    return phoneNumber !== "" || null ? phoneNumber : ""
  }
  protected deliveryData: IDeliveryData = {
    fullName: this.fullNameStorageValue(),
    phoneNumber: this.phoneNumberStorageValue(),
    city: "",
    address: ""
  }
  private readonly deliveryDataSubject = new BehaviorSubject<IDeliveryData>(this.deliveryData)

  constructor(
    private readonly localStorageService: LocalStorageService
  ) {
  }

  getDeliveryData() {
    return this.deliveryDataSubject.asObservable()
  }

  setCity(city: string) {
    this.deliveryData.city = city
    this.deliveryDataSubject.next(this.deliveryData)
  }

  setAddress(address: string) {
    this.deliveryData.address = address
    this.deliveryDataSubject.next(this.deliveryData)
  }

  setName(fullName: string) {
    this.deliveryData.fullName = fullName
    this.deliveryDataSubject.next(this.deliveryData)
  }

  setPhoneNumber(phoneNumber: string) {
    this.deliveryData.phoneNumber = phoneNumber
    this.deliveryDataSubject.next(this.deliveryData)
  }
}
