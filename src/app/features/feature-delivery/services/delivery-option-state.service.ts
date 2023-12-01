import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

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
  private readonly deliveryOptionSubject = new BehaviorSubject<IDeliveryOptions[]>(new Array<IDeliveryOptions>())
  private deliveryOptions: IDeliveryOptions[] = new Array<IDeliveryOptions>()

  // TODO метод заменить на конструктор
  setupData(deliveryOptions: IDeliveryOptions[]) {
    this.deliveryOptions = deliveryOptions
    this.deliveryOptionSubject.next(deliveryOptions)
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
