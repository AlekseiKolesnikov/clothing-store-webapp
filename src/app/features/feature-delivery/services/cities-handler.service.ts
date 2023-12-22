import {Injectable} from "@angular/core";
import {UsCitiesApiService} from "./us-cities-api.service";
import {BehaviorSubject, Subscription} from "rxjs";

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

  getAllCities(): void {
    this.usCitiesSubject.next(this.citiesArray)
  }

  subscribe() {
    this.usCitiesSubject.next(this.initialCitiesArray)
    if (this.citiesArray.length === 0) {
      this.usCitiesService$ = this.usCitiesService.getCity().subscribe(value => {
        this.citiesArray = value.data
      });
    }
    return this.usCitiesSubject.asObservable()
  }

  unsubscribe(): void {
    this.usCitiesService$.unsubscribe()
  }
}
