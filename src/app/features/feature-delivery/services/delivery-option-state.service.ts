import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DeliveryIconService} from "./delivery-icon.service";

export interface IDeliveryOptions {
  icon: string,
  iconName: string
  text: string,
  option: number,
  isSelected: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryOptionStateService {
  private readonly deliveryOptionSubject
  private readonly deliveryOptions: IDeliveryOptions[] = new Array<IDeliveryOptions>()

  constructor(deliveryOptions: DeliveryIconService) {
    this.deliveryOptions = deliveryOptions.getData()
    this.deliveryOptionSubject = new BehaviorSubject<IDeliveryOptions[]>(this.deliveryOptions)
  }

  getState() {
    return this.deliveryOptionSubject.asObservable()
  }

  setState(selectedIndex: number) {
    this.deliveryOptions.forEach((item, index) => {
      item.isSelected = index === selectedIndex
    })
    this.deliveryOptionSubject.next(this.deliveryOptions)
  }
}
