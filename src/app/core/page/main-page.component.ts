import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {PaginationService} from "../../features/feature-products/services/pagination.service";
import {ProductsStoreService} from "../../features/feature-products/services/api/products-store.service";
import {Subscription} from "rxjs";
import {IProduct} from "../../shared/interfaces/product-interfaces";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit, OnDestroy {
  protected productsArray: IProduct[] = []
  protected isLoaderVisible: boolean
  private productStoreService$: Subscription
  constructor(
    private readonly productStoreService: ProductsStoreService,
    private readonly paginationService: PaginationService
  ) {
  }

  ngOnInit() {
    this.productStoreService.fetchData()
    this.productStoreService$ = this.productStoreService.getProductsArray().subscribe(data => {
      this.productsArray = data
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
    this.productStoreService$.unsubscribe()
  }
}
