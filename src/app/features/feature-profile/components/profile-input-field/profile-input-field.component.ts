import {Component, Input, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../../local-storage.service";
import {LocalStorageKeysService} from "../../../../shared/services/local-storage-keys.service";

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
  protected personalFullName: string = this.localStorageService
    .getItem(this.localStorageKeysService.getKey().personalFullName)
  protected personalPhoneNumber: string = this.localStorageService
    .getItem(this.localStorageKeysService.getKey().personalPhoneNumber)

  constructor(
    private localStorageService: LocalStorageService,
    private readonly localStorageKeysService: LocalStorageKeysService
  ) {
  }
}
