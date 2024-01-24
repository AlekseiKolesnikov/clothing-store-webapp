import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {PaginationService} from "../../../feature-products/services/pagination.service";
import {map, Subscription} from "rxjs";
import {ProductsFilterService} from "../../services/products-filter.service";
import {ProductsStoreService} from "../../../feature-products/services/api/products-store.service";
import {
  FEMALE_CLOTHING_INPUT_TYPE,
  MALE_CLOTHING_INPUT_TYPE
} from "../product-filter-page/product-filter-page.component";
import {IProduct} from "../../../../shared/interfaces/product-interfaces";

@Component({
  selector: 'app-filtered-product-list-page',
  templateUrl: './filtered-product-list-page.component.html',
  styleUrls: [
    './filtered-product-list-page.component.scss',
    '../../../../core/page/main-page.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class FilteredProductListPageComponent implements OnInit, OnDestroy {
  protected productsArray: IProduct[] = []
  protected isLoaderVisible: boolean
  protected productsFilterService$: Subscription
  private filterPriceFrom: number
  private filterPriceTo: number
  private filterRateOption: number
  private filterSexOption: { male: boolean, female: boolean }

  constructor(
    private readonly paginationService: PaginationService,
    private readonly productsFilterService: ProductsFilterService,
    private readonly productStoreService: ProductsStoreService
  ) {
  }

  ngOnInit() {
    this.getFilterProductParams()
    this.productsFilterService$ = this.productStoreService.getProductsArray()
      .pipe(
        map(data => data.filter(value => (
          (value.price >= this.filterPriceFrom && value.price <= this.filterPriceTo) &&
          (this.filterSexOption.male ? value.category === MALE_CLOTHING_INPUT_TYPE : (
            this.filterSexOption.female ? value.category === FEMALE_CLOTHING_INPUT_TYPE : value
          ))
        )))
      )
      .subscribe(data => {
        switch (this.filterRateOption) {
          case 0:
            data.sort((a, b) => b.rating.rate - a.rating.rate)
            break;
          case 1:
            data.sort((a, b) => a.price - b.price)
            break;
          case 2:
            data.sort((a, b) => b.price - a.price)
            break;
          case null:
            this.productsArray = data
            break;
        }
        this.productsArray = data
      })
  }

  getFilterProductParams() {
    this.productsFilterService$ = this.productsFilterService.getFilterParams().subscribe(value => {
      this.filterPriceFrom = value.filterPriceFrom
      this.filterPriceTo = value.filterPriceTo
      this.filterRateOption = value.filterRateOption
      this.filterSexOption = value.filterSexOption
    })
  }

  onScroll(event: any) {
    this.paginationService.getLoaderState().subscribe(result => {
      this.isLoaderVisible = result
    })
    this.paginationService.onWindowScroll(event)
  }

  ngOnDestroy(): void {
    this.paginationService.unsubscribe()
    this.productsFilterService$.unsubscribe()
  }
}
