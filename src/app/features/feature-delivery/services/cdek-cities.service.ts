import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {filter, find, map, Observable, toArray} from "rxjs";

export interface ICdekCity {
  cityName: string;
  cityCode: string;
  cityUuid: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  regionFiasGuid: string;
  subRegion: string;
  latitude: number;
  longitude: number;
  kladr: string;
  fiasGuid: string;
  paymentLimit: number;
  timezone: string;
}

@Injectable({
  providedIn: 'root'
})
export class CdekCitiesService {
  private readonly cdekCitiesApi = "https://integration.cdek.ru/v1/location/cities/json"
  constructor(
    private http: HttpClient
  ) { }

  getCity(cityName: string): Observable<ICdekCity[]> {
    return this.http.get<ICdekCity[]>(this.cdekCitiesApi)
  }
}
