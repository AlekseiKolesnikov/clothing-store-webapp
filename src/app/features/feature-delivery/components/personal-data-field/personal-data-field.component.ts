import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-personal-data-field',
  templateUrl: './personal-data-field.component.html',
  styleUrls: ['./personal-data-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalDataFieldComponent {
  @Input() title: string
  @Input() inputType: string
  @Input() idName: string

  protected ngModuleData: string

  constructor() {
  }


}
