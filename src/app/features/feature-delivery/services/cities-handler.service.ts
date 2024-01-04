import {Injectable} from "@angular/core";
import {UsCitiesApiService} from "./api/us-cities-api.service";
import {BehaviorSubject, catchError, Observable, retry, Subscription, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CitiesHandlerService {
  protected citiesArray: string[] = []
  protected usCitiesService$: Subscription
  private readonly usCitiesSubject = new BehaviorSubject<string[]>(new Array<string>())
  private readonly initialCitiesArray: string[] = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "Austin",
    "San Francisco", "San Jose", "Jacksonville", "Seattle", "Denver",
    "Miami", "Las Vegas"
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

  getCitiesSubject(): Observable<string[]> {
    this.usCitiesSubject.next(this.initialCitiesArray)
    if (this.citiesArray.length === 0) {
      this.usCitiesService$ = this.usCitiesService.getCity().pipe(
        retry(3),
        catchError(this.errorHandler)
      ).subscribe(value => {
        this.citiesArray = value.data
      });
    }
    return this.usCitiesSubject.asObservable()
  }

  unsubscribe(): void {
    this.usCitiesService$.unsubscribe()
  }
}
