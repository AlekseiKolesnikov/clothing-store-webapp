import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {LocalStorageService} from "../../../../local-storage.service";
import {
  PERSONAL_FULL_NAME_KEY,
  PERSONAL_PHONE_NUMBER_KEY
} from "../../../../shared/data/local-storage-keys";
import {DeliveryDataService} from "../../services/delivery-data.service";

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
      this.localStorageService.setItem(PERSONAL_FULL_NAME_KEY, event.target.value)
      this.deliveryDataService.setName(event.target.value)
    }
    if (this.idName === "phone") {
      this.localStorageService.setItem(PERSONAL_PHONE_NUMBER_KEY, event.target.value)
      this.deliveryDataService.setPhoneNumber(event.target.value)
    }
  }
}
