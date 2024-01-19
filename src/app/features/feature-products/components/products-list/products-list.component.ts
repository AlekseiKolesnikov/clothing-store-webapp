import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsStoreService} from "../../services/api/products-store.service";
import {IProduct} from "../../services/api/product-api.service";
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Router} from "@angular/router";
import {SEARCH_BAR_PAGE} from "../../../../shared/data/app-routes";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsListComponent extends BaseComponent implements OnInit{
  protected productsArray: IProduct[] = []

  constructor(
    private readonly productStoreService: ProductsStoreService,
    private readonly router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.productStoreService.fetchData()
    this.productStoreService.getProductsArray().subscribe(data => {
      this.productsArray = data
    })
  }

  override click(event: any) {
    super.click(event);
  }

  onClick(option: string) {
    if (option === "search") {
      this.router.navigate([SEARCH_BAR_PAGE])
    } else {

    }
  }

  override touch(event: any) {
    super.touch(event);
  }
}
