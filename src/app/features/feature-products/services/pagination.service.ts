import {Injectable} from "@angular/core";
import {ProductsStoreService} from "./api/products-store.service";
import {asyncScheduler, BehaviorSubject, delay, Observable, observeOn, subscribeOn, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private readonly loaderStateSubject = new BehaviorSubject(false)
  private storeSubscription: Subscription
  private isLoading = false

  constructor(
    private readonly productStoreService: ProductsStoreService
  ) {
  }

  getLoaderState(): Observable<boolean> {
    this.storeSubscription = this.productStoreService.getProductsArray()
      .pipe(
        subscribeOn(asyncScheduler),
        delay(500),
        observeOn(asyncScheduler),
      )
      .subscribe(() => {
      this.loaderStateSubject.next(false)
      this.isLoading = false
    })
    return this.loaderStateSubject.asObservable()
  }

  onWindowScroll(event: any) {
    const height = event.target.offsetHeight
    const topScroll = event.target.scrollTop
    const clientHeight = event.target.scrollHeight
    const scrolledValue = height + topScroll
    console.log(`ScrolledValue = ${scrolledValue}, clientHeight = ${clientHeight}`)
    if ((scrolledValue >= clientHeight - 200) && (scrolledValue <= clientHeight)
      && !this.isLoading) {
      this.isLoading = true
      console.log(`${this.isLoading} Make request!`)
      this.loaderStateSubject.next(true)
      this.paginateProducts();
    }
  }

  unsubscribe() {
    this.storeSubscription.unsubscribe()
  }

  paginateProducts() {
    this.productStoreService.fetchData()
  }
}
