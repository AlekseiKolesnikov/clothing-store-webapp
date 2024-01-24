import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiData} from "../../../../shared/interfaces/delivery-interfaces";

@Injectable({
  providedIn: 'root'
})
export class AddressesApiService {
  private readonly addressesApiUrl = "https://fakerapi.it/api/v1/addresses?_quantity=50"

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getAddress(): Observable<IApiData> {
    return this.http.get<IApiData>(this.addressesApiUrl)
  }
}
