import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {MALE_CLOTHING_INPUT_TYPE} from "../page/product-filter-page/product-filter-page.component";
import {IFilterParams} from "../../../shared/interfaces/product-interfaces";

export const FROM_PRICE_INPUT_OPTION = "price-from-option"
export const TO_PRICE_INPUT_OPTION = "price-to-option"
@Injectable({
  providedIn: 'root'
})
export class ProductsFilterService {
  private filterParams: IFilterParams = {
    filterPriceFrom: 0,
    filterPriceTo: 110,
    filterRateOption: 0,
    filterSexOption: {
      male: false,
      female: false
    }
  }
  private readonly filterParamsSubject: BehaviorSubject<IFilterParams> = new BehaviorSubject<IFilterParams>(this.filterParams)

  setFilterSex(sexFilterInputOption: string) {
    if (sexFilterInputOption === MALE_CLOTHING_INPUT_TYPE) {
      this.filterParams.filterSexOption.male = !this.filterParams.filterSexOption.male
    } else {
      this.filterParams.filterSexOption.female = !this.filterParams.filterSexOption.female
    }
    this.filterParamsSubject.next(this.filterParams)
  }

  setProductRateOptionFilter(filterRateOption: number): void {
    this.filterParams.filterRateOption = filterRateOption
    this.filterParamsSubject.next(this.filterParams)
  }

  setProductPriceFilter(filterPrice: number, inputOption: string): void {
    if (inputOption === FROM_PRICE_INPUT_OPTION) {
      this.filterParams.filterPriceFrom = filterPrice
    } else {
      this.filterParams.filterPriceTo = filterPrice
    }
    this.filterParamsSubject.next(this.filterParams)
  }

  getFilterParams(): Observable<IFilterParams> {
    return this.filterParamsSubject.asObservable()
  }
}
