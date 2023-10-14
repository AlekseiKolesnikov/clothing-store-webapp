import {Component, Input, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment.development";
import {BaseComponent} from "../../../models/base-component.service";

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

  override submit(event: any) {
    super.submit(event);
    if (this.inputName === 'number') {
      environment.profileData.personalPhoneNumber = event.target.value
    }
    if (this.inputName === 'name') {
      environment.profileData.personalFullName = event.target.value
    }
  }

  protected readonly environment = environment;
}
