import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DeliveryInformationService {
  private deliveryInformationData = {
    fullName: "Unspecified",
    address: "Unspecified",
    phoneNumber: "Unspecified",
    city: "Unspecified"
  }

  getData() {
    return this.deliveryInformationData
  }

  changeData(dataOption: string, newData: string) {

  }
}
