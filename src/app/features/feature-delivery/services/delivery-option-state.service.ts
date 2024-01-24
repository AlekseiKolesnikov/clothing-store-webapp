import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DeliveryIconService} from "./delivery-icon.service";
import {IDeliveryOptions} from "../../../shared/interfaces/delivery-interfaces";

@Injectable({
  providedIn: 'root'
})
export class DeliveryOptionStateService {
  private readonly deliveryOptionSubject: BehaviorSubject<IDeliveryOptions[]>
  private readonly deliveryOptions: IDeliveryOptions[] = new Array<IDeliveryOptions>()

  constructor(
    private deliveryOptionsService: DeliveryIconService
  ) {
    this.deliveryOptions = deliveryOptionsService.getData()
    this.deliveryOptionSubject = new BehaviorSubject<IDeliveryOptions[]>(this.deliveryOptions)
  }

  getState() {
    return this.deliveryOptionSubject.asObservable()
  }

  setState(selectedIndex: number) {
    this.deliveryOptions.forEach((item, index) => {
      item.isSelected = index === selectedIndex
    })
    this.deliveryOptionsService.saveSelectedOption(selectedIndex)
    this.deliveryOptionSubject.next(this.deliveryOptions)
  }
}
