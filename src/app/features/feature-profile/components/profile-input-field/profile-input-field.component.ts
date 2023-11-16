import {Component, Input, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../../local-storage.service";
import {localStorageKeys} from "../../../../shared/data/local-storage-keys";

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

    protected phoneResultState: boolean
    protected nameResultState: boolean
    protected personalFullName: string = this.localStorageService.getItem(localStorageKeys.personalFullName)
    protected personalPhoneNumber: string = this.localStorageService.getItem(localStorageKeys.personalPhoneNumber)

    constructor(
        private localStorageService: LocalStorageService
    ) {
    }
}
