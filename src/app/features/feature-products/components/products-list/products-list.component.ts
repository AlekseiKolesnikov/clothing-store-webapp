import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsStoreService} from "../../services/api/products-store.service";
import {IProduct} from "../../services/api/product-api.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsListComponent implements OnInit, OnDestroy {
  protected productsArray: IProduct[]
  constructor(
    private readonly productStoreService: ProductsStoreService
  ) {}

  ngOnInit() {
    this.productStoreService.subscribe()
    this.productStoreService.getProductsArray().subscribe(data => {
      this.productsArray = data
    })
  }

  ngOnDestroy() {
    this.productStoreService.unsubscribe()
  }
}
