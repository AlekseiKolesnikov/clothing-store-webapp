import {EventEmitter, Injectable, Output} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ClickEmitter {
  @Output() buttonClick = new EventEmitter
  constructor() {}

  click(event: Event): void {
    this.buttonClick.emit()
    event.preventDefault()
  }
}
