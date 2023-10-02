import {Component, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {ClickEmitter} from "../../../../shared/models/clickEmitter";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent extends ClickEmitter {
  readonly profileEnvironment = environment
  constructor() {
    super();
  }

  override click(event: Event) {
    super.click(event);
  }
}
