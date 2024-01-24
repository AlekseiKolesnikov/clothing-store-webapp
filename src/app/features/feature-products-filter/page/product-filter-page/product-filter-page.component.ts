import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {
  FROM_PRICE_INPUT_OPTION,
  ProductsFilterService,
  TO_PRICE_INPUT_OPTION
} from "../../services/products-filter.service";
import {FilterOptionService} from "../../services/filter-option.service";
import {Subscription, tap} from "rxjs";
import {TelegramMainButtonModel} from "../../../../shared/models/telegram-ui/telegram-main-button.model";
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Router} from "@angular/router";
import {FILTERED_PRODUCTS_PAGE} from "../../../../shared/data/app-routes";
import {Location} from "@angular/common";
import {IFilterOption} from "../../../../shared/interfaces/product-interfaces";

export const MALE_CLOTHING_INPUT_TYPE = "men's clothing"
export const FEMALE_CLOTHING_INPUT_TYPE = "women's clothing"
@Component({
  selector: 'app-product-filter-page',
  templateUrl: './product-filter-page.component.html',
  styleUrls: ['./product-filter-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFilterPageComponent extends BaseComponent implements OnInit, OnDestroy {
  protected filterPriceFrom: number = 0
  protected filterPriceTo: number = 0
  protected filterRateOption: number
  protected filterOptionsArray: IFilterOption[]
  protected readonly FROM_PRICE_INPUT_OPTION = FROM_PRICE_INPUT_OPTION;
  protected readonly TO_PRICE_INPUT_OPTION = TO_PRICE_INPUT_OPTION;
  private filterOptionService$: Subscription

  constructor(
    private readonly productFilterService: ProductsFilterService,
    private readonly filterOptionService: FilterOptionService,
    private readonly telegramMainButtonModel: TelegramMainButtonModel,
    private readonly router: Router,
    private readonly location: Location
  ) {
    super();
  }

  ngOnInit() {
    this.filterOptionService$ = this.filterOptionService.getState().pipe(
      tap(data => this.filterRateOption = data.findIndex(value1 => value1.isSelected ? value1 : null))
    ).subscribe(value => {
      this.filterOptionsArray = value
    })
    this.telegramMainButtonModel.showMainButton('Применить фильтр')
    window.addEventListener(
      "message",
      (event) => {
        if (event.data === "setData") {
          this.productFilterService.setProductRateOptionFilter(this.filterRateOption)
          this.router.navigate([FILTERED_PRODUCTS_PAGE])
        }
      }
    )
  }

  override click(event: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    super.click(event);
  }

  override touch(event: TouchEvent) {
    if (event) {
      event.stopPropagation();
    }
    super.touch(event);
  }

  onSubmit(event: any, inputOption: string) {
    this.productFilterService.setProductPriceFilter(event.target.value, inputOption)
  }

  goBackButton() {
    this.location.back()
  }

  ngOnDestroy() {
    this.filterOptionService$.unsubscribe()
    this.telegramMainButtonModel.hideMainButton()
  }

  protected readonly MALE_CLOTHING_INPUT_TYPE = MALE_CLOTHING_INPUT_TYPE;
  protected readonly FEMALE_CLOTHING_INPUT_TYPE = FEMALE_CLOTHING_INPUT_TYPE;
}
