import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StoreLocationService {
  private readonly storeLocationData = {
    locationIconName: "location pin",
    locationPinIcon: "assets/images/delivery-icons/location-pin.svg",
    storeAddress: "Москва, Никольская улица, 10/2с2Б",
    storeHours: "Работаем без выходных, с 11:00 до 22:00",
    storeMapLink: "https://yandex.ru/maps/213/moscow/house/nikolskaya_ulitsa_10_2s2b/Z04YcAVlSUMDQFtvfXt0eXhmZw==/?from=api-maps&indoorLevel=1&ll=37.625064%2C55.758453&origin=jsapi_2_1_79&z=17.13",
    lookMapButtonText: "Открыть в Яндекс картах"
  }


  getData() {
    return this.storeLocationData
  }
}
