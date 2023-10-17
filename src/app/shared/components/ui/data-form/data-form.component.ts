import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../models/base-component.service";
import {LocalStorageService} from "../../../../local-storage.service";

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

  protected readonly profileData = this.localStorageService.getItem('profileData')

  constructor(
    protected readonly localStorageService: LocalStorageService
  ) {
    super();
  }

  override submit(event: any) {
    super.submit(event);
    if (this.inputName === 'number') {
      this.localStorageService.setItem('personalPhoneNumber', event.target.value)
    }
    if (this.inputName === 'name') {
      this.localStorageService.setItem('personalFullName', event.target.value)
    }
  }
}
