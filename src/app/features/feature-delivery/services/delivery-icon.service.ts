import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DeliveryIconService {
  private deliveryIconDataArray = [
    {
      icon: "assets/images/delivery-icons/store.svg",
      iconName: "store icon",
      text: "Забрать\nиз магазина",
      index: 0,
      isSelected: false
    },
    {
      icon: "assets/images/delivery-icons/location.svg",
      iconName: "location icon",
      text: "Самовывоз\nиз ПВЗ",
      index: 1,
      isSelected: false
    },
    {
      icon: "assets/images/delivery-icons/carton-box.svg",
      iconName: "carton box icon",
      text: "Доставка\nкурьером",
      index: 2,
      isSelected: false
    }
  ]

  getData() {
    return this.deliveryIconDataArray
  }

  setData() {

  }
}
