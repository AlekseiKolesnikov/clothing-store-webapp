import {Injectable} from "@angular/core";
import {IProduct, ProductApiService} from "./product-api.service";
import {BehaviorSubject, from, mergeMap, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  private readonly productArray: IProduct[] =  new Array<IProduct>()
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

  subscribe(): void {
    this.menProductsApi$ = this.productApiService.getMenProducts().pipe(
      mergeMap(data => from(data))
    ).subscribe(itemList => {
      this.productArray.push(itemList)
      this.productsSubject.next(this.productArray)
    })
    this.womenProductsApi$ = this.productApiService.getWomanProducts().pipe(
      mergeMap(data => from(data))
    ).subscribe(itemList => {
      this.productArray.push(itemList)
      this.productsSubject.next(this.productArray)
    })
  }

  unsubscribe(): void {
    this.menProductsApi$.unsubscribe()
  }
}
