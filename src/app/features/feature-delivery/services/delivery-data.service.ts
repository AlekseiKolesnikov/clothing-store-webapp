import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {TelegramPopupModel} from "../../../shared/models/telegram-ui/telegram-popup.model";

interface IDeliveryData {
  fullName: string,
  phoneNumber: string
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryDataService {
  protected deliveryData: IDeliveryData = {
    fullName: "",
    phoneNumber: ""
  }
  private readonly deliveryDataSubject = new BehaviorSubject<IDeliveryData>(this.deliveryData)

  constructor(
    private readonly telegramPopup: TelegramPopupModel
  ) {
  }

  getDeliveryData() {
    return this.deliveryDataSubject.asObservable()
  }

  setName(fullName: string) {
    this.deliveryData.fullName = fullName
    this.deliveryDataSubject.next(this.deliveryData)
  }

  setPhoneNumber(phoneNumber: string) {
    if (phoneNumber.length < 10) {
      this.telegramPopup.showPopup("Номер не валиден")
    } else {
      this.deliveryData.phoneNumber = phoneNumber
      this.deliveryDataSubject.next(this.deliveryData)
    }
  }
}
