import {Component, Input, ViewEncapsulation} from '@angular/core';
import {InputFieldStateService} from "../../service/input-field-state.service";
import {LocalStorageService} from "../../../../local-storage.service";
import {InputResultStateService} from "../../service/input-result-state.service";

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

    phoneResultState: boolean
    nameResultState: boolean
    protected personalFullName: string = this.localStorageService.getItem('personalFullName')
    protected personalPhoneNumber: string = this.localStorageService.getItem('personalPhoneNumber')

    constructor(
        private inputButtonStateService: InputFieldStateService,
        private inputResultStateService: InputResultStateService,
        private localStorageService: LocalStorageService
    ) {
        this.inputResultStateService.getNameInputResultState().subscribe(value => {
            this.nameResultState = value
        })
        this.inputResultStateService.getPhoneInputResultState().subscribe(value => {
            this.phoneResultState = value
        })
    }

    switchInputState(inputFieldType: string): void {
        if (inputFieldType === 'number') {
            this.inputButtonStateService.setPhoneInputState(false)
        }
        if (inputFieldType === 'name') {
            this.inputButtonStateService.setNameInputState(false)
        }
    }

    switchFormDataState() {
        this.personalFullName = this.localStorageService.getItem('personalFullName')
        this.personalPhoneNumber = this.localStorageService.getItem('personalPhoneNumber')

        this.inputName === 'name' ?
            this.inputResultStateService.setNameInputResultState(this.nameResultState = !this.nameResultState) :
            this.inputResultStateService.setPhoneInputResultState(this.phoneResultState = !this.phoneResultState)

        if (this.personalFullName.length === 0) {
            this.inputButtonStateService.setNameInputState(false)
        }
        if (this.personalPhoneNumber.length === 0) {
            this.inputButtonStateService.setPhoneInputState(false)
        }
    }
}
