import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter
  @Input() buttonClassName: string
  @Input() buttonText: string
  @Input() buttonType: string

  click(event: Event): void {
    this.buttonClick.emit()
    event.preventDefault()
  }
}
