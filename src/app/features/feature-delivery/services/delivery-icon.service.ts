import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DeliveryIconService {
  private readonly deliveryIconDataArray = [
    {
      icon: "assets/images/delivery-icons/store.svg",
      iconName: "store icon",
      text: "Забрать\nиз магазина"
    },
    {
      icon: "assets/images/delivery-icons/location.svg",
      iconName: "location icon",
      text: "Самовывоз\nиз ПВЗ"
    },
    {
      icon: "assets/images/delivery-icons/carton-box.svg",
      iconName: "carton box icon",
      text: "Доставка\nкурьером"
    }
  ]

  getData() {
    return this.deliveryIconDataArray
  }
}
