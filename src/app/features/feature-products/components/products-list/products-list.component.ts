import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsStoreService} from "../../services/api/products-store.service";
import {IProduct} from "../../services/api/product-api.service";
import {BaseComponent} from "../../../../shared/models/base-component.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsListComponent extends BaseComponent implements OnInit{
  protected productsArray: IProduct[] = []

  constructor(
    private readonly productStoreService: ProductsStoreService
  ) {
    super();
  }

  ngOnInit() {
    this.productStoreService.fetchData()
    this.productStoreService.getProductsArray().subscribe(data => {
      this.productsArray.push(...data)
    })
  }

  override click(event: any) {
    super.click(event);
  }

  override touch(event: any) {
    super.touch(event);
  }
}
