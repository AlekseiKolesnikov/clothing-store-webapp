import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ProductsFilterService} from "../../../features/feature-products-filter/services/products-filter.service";
import {
  MALE_CLOTHING_INPUT_TYPE
} from "../../../features/feature-products-filter/page/product-filter-page/product-filter-page.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit, OnDestroy {
  @Input() inputValue: string
  @Input() inputText: string
  @Output() buttonClick = new EventEmitter()
  protected isChecked: boolean
  protected productsFilterService$: Subscription

  constructor(
    private readonly productsFilterService: ProductsFilterService
  ) {}

  ngOnInit() {
    this.productsFilterService$ = this.productsFilterService.getFilterParams().subscribe(value => {
      if (this.inputValue === MALE_CLOTHING_INPUT_TYPE) {
        this.isChecked = value.filterSexOption.male
      } else {
        this.isChecked = value.filterSexOption.female
      }
    })
  }

  onCheckboxClick(event: Event): void {
    event.stopPropagation();
    this.buttonClick.emit()
    this.productsFilterService.setFilterSex(this.inputValue)
  }

  ngOnDestroy() {
    this.productsFilterService$.unsubscribe()
  }
}
