import {Injectable} from "@angular/core";
import {ProductsStoreService} from "./api/products-store.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private readonly loaderStateSubject = new BehaviorSubject(false)
  constructor(
    private readonly productStoreService: ProductsStoreService
  ) {
  }

  getLoaderState(): Observable<boolean> {
    return this.loaderStateSubject.asObservable()
  }

  onWindowScroll(event: any) {
    const height = event.target.offsetHeight
    const topScroll = event.target.scrollTop
    const clientHeight = event.target.scrollHeight

    if (height + topScroll === clientHeight) {
      this.loaderStateSubject.next(true)
      setTimeout(() => {
        this.paginateProducts();
        this.loaderStateSubject.next(false)
      }, 1000)
    }
  }

  paginateProducts() {
    this.productStoreService.subscribe()
  }
}
