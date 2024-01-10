import {Component, HostListener, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsStoreService} from "../../services/api/products-store.service";
import {PaginationService} from "../../services/pagination.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsListComponent implements OnInit, OnDestroy {
  protected productsArray = this.productStoreService.getProductsArray()
  constructor(
    private readonly productStoreService: ProductsStoreService,
    private readonly paginationService: PaginationService
  ) {}
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.paginationService.onWindowScroll()
  }

  ngOnInit() {
    this.productStoreService.subscribe()
  }

  ngOnDestroy() {
    this.productStoreService.unsubscribe()
  }
}
