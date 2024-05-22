import {Injectable} from "@angular/core";
import {ISize} from "../../../shared/interfaces/product-interfaces";

@Injectable({
  providedIn: 'root'
})
export class FilterOptionsDataService {
  private readonly filterOptionsData = [
    {text: "By popularity", isSelected: false},
    {text: "Cheap first", isSelected: false},
    {text: "Expensive first", isSelected: false}
  ]
  private readonly selectedFilterOption: number[] = [0]

  saveSelectedOption(selectedIndex: number) {
    this.selectedFilterOption.push(selectedIndex)
  }

  getFilterData(): Array<ISize> {
    const savedSelectedOption = this.selectedFilterOption[0]
    this.filterOptionsData[savedSelectedOption].isSelected = true
    return this.filterOptionsData
  }
}
