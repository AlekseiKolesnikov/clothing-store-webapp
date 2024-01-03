import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {LocalStorageService} from "../../../../local-storage.service";
import {LocalStorageKeysService} from "../../../../shared/services/local-storage-keys.service";
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

  private readonly nameKey: string = this.localStorageKeyService.PERSONAL_FULL_NAME_KEY
  private readonly numberKey: string = this.localStorageKeyService.PERSONAL_PHONE_NUMBER_KEY

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly localStorageKeyService: LocalStorageKeysService,
    private readonly deliveryDataService: DeliveryDataService
  ) {
    super();
  }

  valueCheck(): string {
    return this.idName === "name" ?
      this.localStorageService.getItem(this.nameKey) :
      this.localStorageService.getItem(this.numberKey)
  }

  override submit(event: any) {
    super.submit(event);
    if (this.idName === "name") {
      this.deliveryDataService.setName(event.target.value)
    }
    if (this.idName === "phone" && event.target.value.length === 10) {
      this.deliveryDataService.setPhoneNumber(parsePhoneNumber(event.target.value, 'US').formatNational())
    }
  }
}
