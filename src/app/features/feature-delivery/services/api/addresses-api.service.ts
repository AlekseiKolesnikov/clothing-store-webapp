import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface IApiData {
  status: string,
  code: number,
  total: number,
  data: IAddress[]
}

export interface IAddress {
  id: number,
  street: string,
  streetName: string,
  buildingNumber: string,
  city: string,
  zipcode: string,
  country: string,
  county_code: string,
  latitude: number,
  longitude: number,
}

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
