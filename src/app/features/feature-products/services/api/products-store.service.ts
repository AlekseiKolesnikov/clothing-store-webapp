import {Injectable} from "@angular/core";
import {IProduct, ProductApiService} from "./product-api.service";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  protected productsArray: IProduct[] = []
  protected productsApi$: Subscription
  constructor(
    private readonly productApiService: ProductApiService
  ) {}

  getProducts(): IProduct[] {
    return this.productsArray
  }

  subscribe(): void {
    this.productsApi$ = this.productApiService.getProducts().subscribe(itemList => {
      this.productsArray.push(itemList)
    })
  }

  unsubscribe(): void {
    this.productsArray = []
    this.productsApi$.unsubscribe()
  }
}
