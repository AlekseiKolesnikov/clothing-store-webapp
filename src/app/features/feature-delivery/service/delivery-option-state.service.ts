import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {deliveryOptions} from "../../feature-profile/data/delivery-information.data";

@Injectable({
  providedIn: 'root'
})
export class DeliveryOptionStateService {
  private deliveryOptionSubject = new BehaviorSubject<string>(deliveryOptions.delivery)

  getState() {
    return this.deliveryOptionSubject.asObservable()
  }

  setState(newState: string) {
    this.deliveryOptionSubject.next(newState)
  }
}
