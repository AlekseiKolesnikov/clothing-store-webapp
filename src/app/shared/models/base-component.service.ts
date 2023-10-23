import {Injectable} from "@angular/core";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseComponent {
  click(event: Event): void {
    event.preventDefault()
  }

  submit(event: Event) {
    event.preventDefault()
  }
}
