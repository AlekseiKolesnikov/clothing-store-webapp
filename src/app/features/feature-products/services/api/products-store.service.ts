import {Injectable} from "@angular/core";
import {IProduct, ProductApiService} from "./product-api.service";
import {BehaviorSubject, from, mergeMap, Observable, Subscription, zip, zipAll} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  private readonly productArray: IProduct[] = new Array<IProduct>()
  private readonly productsSubject: BehaviorSubject<IProduct[]>
  private menProductsApi$: Subscription
  private womenProductsApi$: Subscription

  constructor(
    private readonly productApiService: ProductApiService
  ) {
    this.productsSubject = new BehaviorSubject<IProduct[]>(this.productArray)
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

  unsubscribe(): void {
    this.menProductsApi$.unsubscribe()
    this.womenProductsApi$.unsubscribe()
  }
}
