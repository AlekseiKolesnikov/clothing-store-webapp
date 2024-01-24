import {Injectable} from "@angular/core";
import {ProductApiService} from "./product-api.service";
import {BehaviorSubject, from, mergeMap, zip} from "rxjs";
import {IProduct} from "../../../../shared/interfaces/product-interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  private readonly productsSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([])
  private readonly productsArray: Array<IProduct> = new Array<IProduct>()
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
      this.productsArray.push(...itemList)
      this.productsSubject.next(this.productsArray)
    })
  }
}
