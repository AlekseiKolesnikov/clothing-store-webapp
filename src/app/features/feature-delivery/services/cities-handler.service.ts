import {Injectable} from "@angular/core";
import {UsCitiesApiService} from "./api/us-cities-api.service";
import {BehaviorSubject, Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitiesHandlerService {
  private readonly usCitiesSubject = new BehaviorSubject<string[]>(new Array<string>())
  protected citiesArray: string[] = []
  protected usCitiesService$: Subscription
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

  setCitiesSubject(): void {
    this.usCitiesSubject.next(this.citiesArray)
  }

  getCitiesSubject(): Observable<string[]> {
    this.usCitiesSubject.next(this.initialCitiesArray)
    if (this.citiesArray.length === 0) {
      this.usCitiesService$ = this.usCitiesService.getCity().subscribe(value => {
        if (value.data === null || value.data === undefined) {
          throw new Error('Данные не были получены. Пожалуйста перезагрузите страницу.')
        } else {
          this.citiesArray = value.data
        }
      });
    }
    return this.usCitiesSubject.asObservable()
  }

  unsubscribe(): void {
    this.usCitiesService$.unsubscribe()
  }
}
