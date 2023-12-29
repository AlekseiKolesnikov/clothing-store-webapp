import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

interface IDeliveryData {
  city: string,
  address: string,
  fullName: string,
  phoneNumber: string
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryDataService {
  protected deliveryData: IDeliveryData = {
    city: "",
    address: "",
    fullName: "",
    phoneNumber: ""
  }
  private readonly deliveryDataSubject = new BehaviorSubject<IDeliveryData>(this.deliveryData)

  constructor() {
  }

  getDeliveryData() {
    return this.deliveryDataSubject.asObservable()
  }

  setName(fullName: string) {
    this.deliveryData.fullName = fullName
    this.deliveryDataSubject.next(this.deliveryData)
  }

  setPhoneNumber(phoneNumber: string) {
    this.deliveryData.phoneNumber = phoneNumber
    this.deliveryDataSubject.next(this.deliveryData)
  }

  setCity(cityName: string) {
    this.deliveryData.city = cityName
    this.deliveryDataSubject.next(this.deliveryData)
  }

  setAddress(address: string) {
    this.deliveryData.address = address
    this.deliveryDataSubject.next(this.deliveryData)
  }
}
