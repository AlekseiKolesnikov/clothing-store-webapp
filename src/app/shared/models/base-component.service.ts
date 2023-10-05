import {EventEmitter, Injectable, Output} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BaseComponent {
  @Output() buttonClick = new EventEmitter

  click(event: Event): void {
    this.buttonClick.emit()
    event.preventDefault()
  }

  submit() {
  }
}
