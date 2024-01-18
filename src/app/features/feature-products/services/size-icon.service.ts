import {Injectable} from "@angular/core";
import {SIZE_OPTION} from "../../../shared/data/local-storage-keys";
import {LocalStorageService} from "../../../local-storage.service";
import {ISize} from "./size-option-state.service";

@Injectable({
  providedIn: 'root'
})
export class SizeIconService {
  private readonly sizesIconDataArray = [
    { text: "2XS", isSelected: false },
    { text: "XS", isSelected: false },
    { text: "S", isSelected: false },
    { text: "M", isSelected: false },
    { text: "L", isSelected: false },
    { text: "XL", isSelected: false },
    { text: "2XL", isSelected: false },
    { text: "3XL", isSelected: false }
  ]

  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  saveSelectedOption(selectedIndex: number) {
    this.localStorage.setPrimitiveItem(SIZE_OPTION, selectedIndex.toString())
  }

  getSizeData(): Array<ISize> {
    const savedSelectedOption = this.localStorage.getPrimitiveItem<number>("savedDeliveryOption",
      (stringValue): number => {
        return +stringValue
      })
    this.sizesIconDataArray[savedSelectedOption].isSelected = true
    return this.sizesIconDataArray
  }
}
