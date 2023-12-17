import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseComponent {
  click(event: Event): void {
    event.preventDefault()
    event.stopPropagation()
  }

  touch(event: Event): void {

  }

  submit(event: Event) {
    event.preventDefault()
  }

  scroll() {
    const activeElement = <HTMLElement>document.activeElement
    activeElement.blur()
  }
}
