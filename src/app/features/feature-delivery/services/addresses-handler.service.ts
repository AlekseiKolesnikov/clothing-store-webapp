import {Injectable} from "@angular/core";
import {AddressesApiService} from "./api/addresses-api.service";
import {BehaviorSubject, map, Observable, retry, Subscription} from "rxjs";
import {ISearchData} from "../../../shared/interfaces/delivery-interfaces";

@Injectable({
  providedIn: 'root'
})
export class AddressesHandlerService {
  private readonly addressesSubject = new BehaviorSubject<ISearchData[]>(new Array<ISearchData>())
  protected addressesArray: ISearchData[] = []
  protected addressesService$: Subscription
  protected initialAddressesArray: ISearchData[] = [
    {value: "11 Wall Street, New York", id: 0}, {value: "1313 Mockingbird Lane", id: 1},
    {value: "100 Universal City Plaza, Universal City", id: 2}, {value: "123 Sesame Street", id: 3},
    {value: "700 Pennsylvania Avenue", id: 4}, {value: "615 8th Avenue, Nashville", id: 5},
    {value: "1 Infinite Loop, Cupertino", id: 6}, {value: "1601 Willow Road, Menlo Park", id: 7},
    {value: "1 Ames St, Cambridge", id: 8}, {value: "2600 Netherland Avenue, Bronx", id: 9},
    {value: "3215 W State Road 46, Bloomington", id: 10}, {value: "1701 Bryant Street, Denver", id: 11}
  ]
  constructor(
    private readonly addressesApiService: AddressesApiService
  ) { }

  setAddressesSubject(): void {
    this.addressesSubject.next(this.addressesArray)
  }

  getAddressesSubject(): Observable<ISearchData[]> {
    this.addressesSubject.next(this.initialAddressesArray)
    if (this.addressesArray.length === 0) {
      this.addressesService$ = this.addressesApiService.getAddress().pipe(
        retry(3),
        map(data => data.data.map((item, index) => ({ value: item.street, id: index })))
      ).subscribe(value => {
        const itemValue = value.map(item => item.value)
        if (itemValue === null || itemValue === undefined) {
          throw new Error('Data was not received. Please reload the page.')
        } else {
          this.addressesArray = value
        }
      })
    }
    return this.addressesSubject.asObservable()
  }

  unsubscribe() {
    this.addressesService$.unsubscribe()
  }
}
