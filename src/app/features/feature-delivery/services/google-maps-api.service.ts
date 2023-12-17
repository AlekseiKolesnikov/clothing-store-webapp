import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsApiService {
  protected inputText: string = ''
  private readonly apiKey = "AIzaSyDjn_yV2Ae9EqzZdenYGX5HWzlvN3xkVz8"
  private readonly googleMapsApiUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json"

  constructor(
    private readonly http: HttpClient
  ) {
  }

  giveText(inputText: string): void {
    this.inputText = inputText
  }

  getAddress(): Observable<any> {
    let params = new HttpParams()
      .set('input', '75')
      .set('types', 'geocode')
      .set('components', 'country:us')
      .set('key', this.apiKey)

    return this.http.get<any>(this.googleMapsApiUrl, { params })
  }
}
