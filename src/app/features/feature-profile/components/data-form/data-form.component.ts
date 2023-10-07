import {booleanAttribute, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment.development";
import {BaseComponent} from "../../../../shared/models/base-component.service";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataFormComponent extends BaseComponent {
  @Input() submitButtonText: string
  @Input() cancelButtonText: string
  @Input() changeButtonText: string
  @Input() buttonType: string
  @Input() buttonPlaceholder: string
  @Input({transform: booleanAttribute}) inputFieldIsShown: boolean
  @Output() cancelButtonClick = new EventEmitter;

  phoneNumberIsShown: boolean = false
  protected readonly profileEnvironment = environment;

  override submit() {
    super.submit();
    this.phoneNumberIsShown = true
  }
}
