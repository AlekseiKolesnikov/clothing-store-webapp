import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../models/base-component.model";
import {LocalStorageService} from "../../../local-storage.service";
import {LocalStorageKeysService} from "../../services/local-storage-keys.service";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataFormComponent extends BaseComponent {
  @Input() inputTextLength: number
  @Input() inputType: string
  @Input() buttonPlaceholder: string
  @Input() inputName: string
  @Output() newItemEvent = new EventEmitter<string>()

  protected personalPhoneNumberKey = this.localStorageKeysService.getKey().personalPhoneNumber
  protected personalFullNameKey = this.localStorageKeysService.getKey().personalFullName

  constructor(
    protected readonly localStorageService: LocalStorageService,
    private readonly localStorageKeysService: LocalStorageKeysService
  ) {
    super();
  }

  override submit(event: any) {
    super.submit(event);
    if (this.inputName === 'number') {
      this.localStorageService.setItem(this.personalPhoneNumberKey, event.target.value)
    }
    if (this.inputName === 'name') {
      this.localStorageService.setItem(this.personalFullNameKey, event.target.value)
    }
  }
}
