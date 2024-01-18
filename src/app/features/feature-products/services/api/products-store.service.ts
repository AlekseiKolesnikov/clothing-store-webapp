import {Injectable} from "@angular/core";
import {IProduct, ProductApiService} from "./product-api.service";
import {BehaviorSubject, from, mergeMap, zip} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  private readonly productsSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([])
  constructor(
    private readonly productApiService: ProductApiService
  ) {
  }

  getProductsArray() {
    return this.productsSubject.asObservable()
  }

  fetchData(): void {
    zip(
      this.productApiService.getMenProducts(),
      this.productApiService.getWomanProducts()
    ).pipe(
      mergeMap(data => from(data))
    ).subscribe(itemList => {
      this.productsSubject.next(itemList)
    })
  }
}
