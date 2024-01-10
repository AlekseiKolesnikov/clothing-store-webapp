import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductPageComponent} from "../features/feature-products/pages/product-page/product-page.component";
import {ProductsListComponent} from "../features/feature-products/components/products-list/products-list.component";
import {ProductCardComponent} from "../features/feature-products/components/product-card/product-card.component";

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductsListComponent,
    ProductCardComponent
  ],
  exports: [
    ProductsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
}
