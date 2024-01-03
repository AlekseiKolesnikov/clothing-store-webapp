import {Injectable} from "@angular/core";
import {AddressesApiService} from "./api/addresses-api.service";
import {BehaviorSubject, Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressesHandlerService {
  private readonly addressesSubject = new BehaviorSubject<string[]>(new Array<string>())
  protected addressesArray: string[] = []
  protected addressesService$: Subscription
  protected initialAddressesArray: string[] = [
    "11 Wall Street, New York","1313 Mockingbird Lane", "100 Universal City Plaza, Universal City",
    "123 Sesame Street", "700 Pennsylvania Avenue", "615 8th Avenue, Nashville",
    "1 Infinite Loop, Cupertino", "1601 Willow Road, Menlo Park",
    "1 Ames St, Cambridge", "2600 Netherland Avenue, Bronx",
    "3215 W State Road 46, Bloomington", "1701 Bryant Street, Denver"
  ]
  constructor(
    private readonly addressesApiService: AddressesApiService
  ) { }

  setAddressesSubject(): void {
    this.addressesSubject.next(this.addressesArray)
  }

  getAddressesSubject(): Observable<string[]> {
    this.addressesSubject.next(this.initialAddressesArray)
    if (this.addressesArray.length === 0) {
      this.addressesService$ = this.addressesApiService.getAddress().subscribe(value => {
        const itemValue = value.data.map(value => { return value.street })
        if (itemValue === null || itemValue === undefined) {
          throw new Error('Данные не были получены. Пожалуйста перезагрузите страницу.')
        } else {
          this.addressesArray = itemValue
        }
      })
    }
    return this.addressesSubject.asObservable()
  }

  unsubscribe() {
    this.addressesService$.unsubscribe()
  }
}
