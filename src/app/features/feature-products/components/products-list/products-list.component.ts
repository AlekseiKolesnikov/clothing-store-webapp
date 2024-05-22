import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Router} from "@angular/router";
import {PRODUCT_FILTER_PAGE, SEARCH_BAR_PAGE} from "../../../../shared/data/app-routes";
import {IProduct} from "../../../../shared/interfaces/product-interfaces";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsListComponent extends BaseComponent {
  @Input() productsArray: IProduct[]

  constructor(
    private readonly router: Router
  ) {
    super();
  }

  override click(event: any) {
    super.click(event);
  }

  onClick(option: string) {
    if (option === "search") {
      this.router.navigate([SEARCH_BAR_PAGE])
    } else {
      this.router.navigate([PRODUCT_FILTER_PAGE])
    }
  }

  override touch(event: any) {
    super.touch(event);
  }
}
