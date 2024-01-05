import {Injectable} from "@angular/core";
import {IDeliveryOptions} from "./delivery-option-state.service";
import {LocalStorageService} from "../../../local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class DeliveryIconService {
  constructor(private localStorage: LocalStorageService) {
  }

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

  saveSelectedOption(selectedIndex: number) {
    this.localStorage.setPrimitiveItem("savedDeliveryOption", selectedIndex.toString())
  }

  getData(): Array<IDeliveryOptions> {
    const savedSelectedOption = this.localStorage.getPrimitiveItem<number>("savedDeliveryOption",
      (stringValue): number => {
        return +stringValue
      })
    this.deliveryIconDataArray[savedSelectedOption].isSelected = true
    return this.deliveryIconDataArray
  }

  setData() {

  }
}
