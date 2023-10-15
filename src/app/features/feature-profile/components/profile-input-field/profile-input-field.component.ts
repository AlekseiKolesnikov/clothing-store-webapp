import {Component, Input, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment.development";
import {InputButtonStateService} from "../../service/input-button-state.service";

@Component({
  selector: 'app-profile-input-field',
  templateUrl: './profile-input-field.component.html',
  styleUrls: ['./profile-input-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileInputFieldComponent {
  @Input() inputTextLength: number
  @Input() inputType: string
  @Input() buttonPlaceholder: string
  @Input() inputName: string

  inputFiledIsShown: boolean = false
  protected readonly environment = environment;

  constructor(
    private inputButtonStateService: InputButtonStateService
  ) {
  }

  switchInputState(inputFieldType: string): void {
    if (inputFieldType === 'number') {
      this.inputButtonStateService.setPhoneButtonState(false)
    }
    if (inputFieldType === 'name') {
      this.inputButtonStateService.setNameButtonState(false)
    }
  }

  switchFormDataState() {
    this.inputFiledIsShown = !this.inputFiledIsShown

    if (this.environment.profileData.personalFullName.length === 0) {
      this.inputButtonStateService.setNameButtonState(false)
    }
    if (this.environment.profileData.personalPhoneNumber.length === 0) {
      this.inputButtonStateService.setPhoneButtonState(false)
    }
  }
}
