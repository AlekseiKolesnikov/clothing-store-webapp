import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsStoreService} from "../../feature-products/services/api/products-store.service";
import {map, Subscription} from "rxjs";
import {ISearchData} from "../../feature-delivery/services/cities-handler.service";

@Component({
  selector: 'app-search-bar-widget-page',
  templateUrl: './search-bar-page.component.html',
  styleUrls: ['./search-bar-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarPageComponent implements OnInit, OnDestroy {
  protected product: string = ''
  protected productsArray: ISearchData[] = []
  protected productStoreService$: Subscription
  constructor(
    private readonly productStoreService: ProductsStoreService
  ) {
  }

  ngOnInit(): void {
    this.productStoreService$ = this.productStoreService.getProductsArray().pipe(
      map(data => data.map((item) => ({ value: item.title, id: item.id })))
    ).subscribe(value => {
      this.productsArray = value
    })
  }

  ngOnDestroy() {
    this.productStoreService$.unsubscribe()
  }
}
