import {Component, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import {BaseComponent} from "../../../shared/models/base-component.service";
import {StatusTableData} from "../data/status-table.data";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePageComponent extends BaseComponent {
  phoneNumberInputFieldIsShown: boolean = false

  readonly statusTableData = StatusTableData
  protected readonly profileEnvironment = environment


  bindPhoneNumber() {
    this.phoneNumberInputFieldIsShown = !this.phoneNumberInputFieldIsShown
  }

  bindDeliveryInf() {
  }
}
