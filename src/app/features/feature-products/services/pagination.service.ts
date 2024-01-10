import {Injectable} from "@angular/core";
import {ProductsStoreService} from "./api/products-store.service";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  constructor(
    private readonly productStoreService: ProductsStoreService
  ) { }

  onWindowScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;

    if (pos === max) {
      this.paginateProducts();
    }
  }

  paginateProducts() {
    this.productStoreService.subscribe()
  }
}
