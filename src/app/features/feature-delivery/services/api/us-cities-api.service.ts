import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface IUSCities {
  data: string[]
}

@Injectable({
  providedIn: 'root'
})
export class UsCitiesApiService {
  private readonly usCitiesApi = "https://countriesnow.space/api/v0.1/countries/cities"
  private readonly requestOptions = {
    country: "United States"
  }
  constructor(
    private http: HttpClient
  ) { }

  getCity(): Observable<IUSCities> {
    return this.http.post<IUSCities>(this.usCitiesApi, this.requestOptions)
  }
}
