import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-full-screen-button',
  templateUrl: './full-screen-button.component.html',
  styleUrls: ['./full-screen-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FullScreenButtonComponent {
  @Input() buttonClassName: string
  @Input() buttonText: string
  @Output() buttonClick = new EventEmitter

  click(event: Event): void {
    this.buttonClick.emit()
    event.preventDefault()
  }

  submit( ) {

  }
}
