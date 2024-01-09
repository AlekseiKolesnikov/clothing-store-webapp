import {Injectable} from "@angular/core";
import {IDeliveryOptions} from "./delivery-option-state.service";
import {LocalStorageService} from "../../../local-storage.service";
import {DELIVERY_OPTION} from "../../../shared/data/local-storage-keys";

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
      icon: "assets/images/delivery-icons/carton-box.svg",
      iconName: "location icon",
      text: "Самовывоз\nиз ПВЗ",
      isSelected: false,
      option: 1
    }
  ]

  saveSelectedOption(selectedIndex: number) {
    this.localStorage.setPrimitiveItem(DELIVERY_OPTION, selectedIndex.toString())
  }

  getData(): Array<IDeliveryOptions> {
    const savedSelectedOption = this.localStorage.getPrimitiveItem<number>("savedDeliveryOption",
      (stringValue): number => {
        return +stringValue
      })
    this.deliveryIconDataArray[savedSelectedOption].isSelected = true
    return this.deliveryIconDataArray
  }
}
