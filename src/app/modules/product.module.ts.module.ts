import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductPageComponent} from "../features/feature-products/pages/product-page/product-page.component";
import {ProductsListComponent} from "../features/feature-products/components/products-list/products-list.component";
import {ProductCardComponent} from "../features/feature-products/components/product-card/product-card.component";
import {SharedModule} from "./shared.module";
import {ProductSizesComponent} from "../features/feature-products/components/product-sizes/product-sizes.component";
import {RouterLink} from "@angular/router";
import {SizeTablePageComponent} from "../features/feature-products/pages/size-table-page/size-table-page.component";
import {FoldedInfBoxComponent} from "../features/feature-products/components/folded-inf-box/folded-inf-box.component";

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductSizesComponent,
    SizeTablePageComponent,
    FoldedInfBoxComponent
  ],
  exports: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ]
})
export class ProductModule {
}
