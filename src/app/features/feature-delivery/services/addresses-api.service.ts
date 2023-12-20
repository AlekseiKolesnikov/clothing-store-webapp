import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressesApiService {
  protected inputText: string = ''
  private readonly googleMapsApiUrl = "https://fakerapi.it/api/v1/addresses?_quantity=20"

  constructor(
    private readonly http: HttpClient
  ) {
  }

  giveText(inputText: string): void {
    this.inputText = inputText
  }

  getAddress(): Observable<any> {
    return this.http.get<any>(this.googleMapsApiUrl)
  }
}
