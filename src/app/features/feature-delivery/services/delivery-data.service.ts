import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

interface IDeliveryData {
  city: string,
  distributionAddress: string,
  personalAddress: string
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryDataService {
  protected deliveryData: IDeliveryData = {
    city: "",
    distributionAddress: "",
    personalAddress: ""
  }
  private readonly deliveryDataSubject = new BehaviorSubject<IDeliveryData>(this.deliveryData)

  getDeliveryData() {
    return this.deliveryDataSubject.asObservable()
  }

  setCity(cityName: string) {
    this.deliveryData.city = cityName
    this.deliveryDataSubject.next(this.deliveryData)
  }

  setDistribution(distribution: string) {
    this.deliveryData.distributionAddress = distribution
    this.deliveryDataSubject.next(this.deliveryData)
  }

  setAddress(address: string) {
    this.deliveryData.personalAddress = address
    this.deliveryDataSubject.next(this.deliveryData)
  }
}
