import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

interface IDeliveryData {
  city: string,
  address: string
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryDataService {
  protected deliveryData: IDeliveryData = {
    city: "",
    address: ""
  }
  private readonly deliveryDataSubject = new BehaviorSubject<IDeliveryData>(this.deliveryData)

  constructor() {
  }

  getDeliveryData() {
    return this.deliveryDataSubject.asObservable()
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
