import {Component, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment.development";
import {InputButtonStateService} from "../../service/input-button-state.service";

@Component({
      selector: 'app-profile-delivery-inf',
      templateUrl: './profile-delivery-inf.component.html',
      styleUrls: ['./profile-delivery-inf.component.scss'],
      encapsulation: ViewEncapsulation.None
})
export class ProfileDeliveryInfComponent {
      numberFieldIsShown: boolean
      nameFieldIsShown: boolean
      protected readonly environment = environment;

      constructor(
            private inputButtonStateService: InputButtonStateService
      ) {
            this.inputButtonStateService.getNameButtonState().subscribe(value => {
                  this.nameFieldIsShown = value
            })
            this.inputButtonStateService.getPhoneButtonState().subscribe(value => {
                  this.numberFieldIsShown = value
            })
      }

      switchInputState(inputFieldType: string): void {
            if (inputFieldType === 'number') {
                  this.inputButtonStateService.setPhoneButtonState(true)
            }
            if (inputFieldType === 'name') {
                  this.inputButtonStateService.setNameButtonState(true)
            }
      }
}
