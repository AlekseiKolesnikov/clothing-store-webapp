import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageKeysService {
  public readonly DELIVERY_ADDRESS_KEY = "delivery_address"
  public readonly DELIVERY_CITY_KEY = "delivery_city"
  public readonly PERSONAL_FULL_NAME_KEY = "personal_full_name"
  public readonly PERSONAL_PHONE_NUMBER_KEY = "personal_phone_number"
  public readonly POINTS_CARD_KEY = "points_card"
}
