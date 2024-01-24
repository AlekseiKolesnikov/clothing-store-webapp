import {Injectable} from "@angular/core";
import {UsCitiesApiService} from "./api/us-cities-api.service";
import {BehaviorSubject, catchError, map, Observable, retry, Subscription, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ISearchData} from "../../../shared/interfaces/delivery-interfaces";

@Injectable({
  providedIn: 'root'
})
export class CitiesHandlerService {
  protected citiesArray: ISearchData[] = []
  protected usCitiesService$: Subscription
  private readonly usCitiesSubject = new BehaviorSubject<ISearchData[]>(new Array<ISearchData>())
  private readonly initialCitiesArray: ISearchData[] = [
    {value: "New York", id: 0}, {value: "Los Angeles", id: 1},
    {value: "Chicago", id: 2}, {value: "Houston", id: 3},
    {value: "Phoenix", id: 4}, {value: "Philadelphia", id: 5},
    {value: "San Antonio", id: 6}, {value: "San Diego", id: 7},
    {value: "Dallas", id: 8}, {value: "Austin", id: 9},
    {value: "San Francisco", id: 10}, {value: "San Jose", id: 11},
    {value: "Jacksonville", id: 12}, {value: "Seattle", id: 13},
    {value: "Denver", id: 14}, {value: "Miami", id: 15},
    {value: "Las Vegas", id: 16}
  ]

  constructor(
    private readonly usCitiesService: UsCitiesApiService
  ) {
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  setCitiesSubject(): void {
    this.usCitiesSubject.next(this.citiesArray)
  }

  getCitiesSubject(): Observable<ISearchData[]> {
    this.usCitiesSubject.next(this.initialCitiesArray)
    if (this.citiesArray.length === 0) {
      this.usCitiesService$ = this.usCitiesService.getCity().pipe(
        retry(3),
        catchError(this.errorHandler),
        map(data => data.data.map((item, index) => ({ value: item, id: index })))
      ).subscribe(value => {
        this.citiesArray = value
      });
    }
    return this.usCitiesSubject.asObservable()
  }

  unsubscribe(): void {
    this.usCitiesService$.unsubscribe()
  }
}
