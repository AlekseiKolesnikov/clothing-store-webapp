import {Injectable} from "@angular/core";
import {IDeliveryOptions} from "./delivery-option-state.service";

@Injectable({
  providedIn: 'root'
})
export class DeliveryIconService {
  private readonly deliveryIconDataArray = [
    {
      icon: "assets/images/delivery-icons/store.svg",
      iconName: "store icon",
      text: "Забрать\nиз магазина",
      isSelected: false,
      option: 0
    },
    {
      icon: "assets/images/delivery-icons/location.svg",
      iconName: "location icon",
      text: "Самовывоз\nиз ПВЗ",
      isSelected: false,
      option: 1
    },
    {
      icon: "assets/images/delivery-icons/carton-box.svg",
      iconName: "carton box icon",
      text: "Доставка\nкурьером",
      isSelected: false,
      option: 2
    }
  ]

  getData(): Array<IDeliveryOptions> {
    return this.deliveryIconDataArray
  }
}
