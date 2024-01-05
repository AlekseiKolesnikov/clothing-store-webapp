import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {LocalStorageService} from "../../../../local-storage.service";
import {
  PERSONAL_FULL_NAME_KEY,
  PERSONAL_PHONE_NUMBER_KEY
} from "../../../../shared/data/local-storage-keys";
import {DeliveryDataService} from "../../services/delivery-data.service";
import {parsePhoneNumber} from "libphonenumber-js"

@Component({
  selector: 'app-personal-data-field',
  templateUrl: './personal-data-field.component.html',
  styleUrls: ['./personal-data-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalDataFieldComponent extends BaseComponent {
  @Input() title: string
  @Input() inputType: string
  @Input() idName: string
  @Input() maxLength: number

  protected inputData: string
  
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly deliveryDataService: DeliveryDataService
  ) {
    super();
  }

  valueCheck(): string {
    return this.idName === "name" ?
      this.localStorageService.getItem(PERSONAL_FULL_NAME_KEY) :
      this.localStorageService.getItem(PERSONAL_PHONE_NUMBER_KEY)
  }

  override submit(event: any) {
    super.submit(event)
    if (this.idName === "name") {
      this.deliveryDataService.setName(event.target.value)
    }
    if (this.idName === "phone" && event.target.value.length === 10) {
      this.deliveryDataService.setPhoneNumber(parsePhoneNumber(event.target.value, 'US').formatNational())
    }
  }
}
