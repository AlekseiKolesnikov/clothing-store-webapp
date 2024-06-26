import {Injectable} from "@angular/core";
import {LocalStorageService} from "../../../local-storage.service";
import {DELIVERY_OPTION} from "../../../shared/data/local-storage-keys";
import {IDeliveryOptions} from "../../../shared/interfaces/delivery-interfaces";

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
      text: "Pick up at\nthe store",
      isSelected: false,
      option: 0
    },
    {
      icon: "assets/images/delivery-icons/carton-box.svg",
      iconName: "location icon",
      text: "Delivery\nhome",
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
