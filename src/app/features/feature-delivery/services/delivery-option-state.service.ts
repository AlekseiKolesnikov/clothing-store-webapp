import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface IDeliveryOptions {
  option: number,
  isSelected: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryOptionStateService {
  private readonly deliveryOptionSubject = new BehaviorSubject<IDeliveryOptions[]>(new Array<IDeliveryOptions>())
  private deliveryOptions: IDeliveryOptions[] = new Array<IDeliveryOptions>()

  constructor(
    // private deliveryOptionsArray: IDeliveryOptions[]
  ) {
  }

  getState() {
    return this.deliveryOptionSubject.asObservable()
  }

  setState(newState: IDeliveryOptions) {
    const isExist = this.deliveryOptions.some(option => option.option === newState.option)
    const elementIndex = this.deliveryOptions.findIndex(value => value.option = newState.option)

    this.deliveryOptions.forEach(item => {
      item.isSelected = false
    })

    if (!isExist) {
      this.deliveryOptions.push(newState)
    } else {
      this.deliveryOptions.splice(elementIndex, 1)
      this.deliveryOptions.push(newState)
    }

    this.deliveryOptionSubject.next(this.deliveryOptions)
  }
}
