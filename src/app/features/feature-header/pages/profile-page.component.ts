import {Component, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import {BaseComponent} from "../../../shared/models/base-component.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePageComponent extends BaseComponent {
  phoneNumberInputFieldIsShown: boolean = false
  phoneNumberIsShown: boolean = false
  deliveryInfIsShown: boolean = false


  readonly profileEnvironment = environment

  constructor() {
    super();
  }

  bindPhoneNumber(event: Event) {
    super.click(event);
    this.phoneNumberInputFieldIsShown = true
  }

  bindDeliveryInf(event: Event) {
    super.click(event);
  }

  override submit() {
    super.submit();
    this.phoneNumberIsShown = true
  }
}
