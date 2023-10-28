import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {InputFieldStateService} from "../../service/input-field-state.service";
import {InputResultStateService} from "../../service/input-result-state.service";
import {LocalStorageService} from "../../../../local-storage.service";
import {localStorageKeys} from "../../../../shared/data/local-storage-keys";

@Component({
  selector: 'app-profile-delivery-inf',
  templateUrl: './profile-delivery-inf.component.html',
  styleUrls: ['./profile-delivery-inf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDeliveryInfComponent implements OnInit {
  numberFieldIsShown: boolean
  nameFieldIsShown: boolean

  constructor(
    private inputFieldStateService: InputFieldStateService,
    private inputResultStateService: InputResultStateService,
    private localStorageService: LocalStorageService
  ) {
    this.inputFieldStateService.getNameInputState().subscribe(value => {
      this.nameFieldIsShown = value
    })
    this.inputFieldStateService.getPhoneInputState().subscribe(value => {
      this.numberFieldIsShown = value
    })
  }

  ngOnInit() {
    if (this.localStorageService.getItem(localStorageKeys.personalFullName).length > 0) {
      this.inputResultStateService.setNameInputResultState(true)
      this.inputFieldStateService.setNameInputState(true)
    }
    if (this.localStorageService.getItem(localStorageKeys.personalPhoneNumber).length > 0) {
      this.inputResultStateService.setPhoneInputResultState(true)
      this.inputFieldStateService.setPhoneInputState(true)
    }
  }

  switchInputState(inputFieldType: string): void {
    if (inputFieldType === 'number') {
      this.inputFieldStateService.setPhoneInputState(true)
    }
    if (inputFieldType === 'name') {
      this.inputFieldStateService.setNameInputState(true)
    }
  }
}
