import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {FilterOptionsDataService} from "./filter-options-data.service";
import {IFilterOption} from "../../../shared/interfaces/product-interfaces";

@Injectable({
  providedIn: 'root'
})
export class FilterOptionService {
  private readonly filterOptionSubject: BehaviorSubject<IFilterOption[]>
  private readonly filterOptions: IFilterOption[] = new Array<IFilterOption>()

  constructor(
    private readonly filterOptionsDataService: FilterOptionsDataService
  ) {
    this.filterOptions = filterOptionsDataService.getFilterData()
    this.filterOptionSubject = new BehaviorSubject<IFilterOption[]>(this.filterOptions)
  }

  getState() {
    return this.filterOptionSubject.asObservable()
  }

  setState(selectedIndex: number) {
    this.filterOptions.forEach((item, index) => {
      if (item.isSelected) {
        item.isSelected = false
      } else {
        item.isSelected = index === selectedIndex
      }
    })
    this.filterOptionsDataService.saveSelectedOption(selectedIndex)
    this.filterOptionSubject.next(this.filterOptions)
  }
}
