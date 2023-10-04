import {Component, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {BaseComponent} from "../../../shared/models/base-component.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilePageComponent extends BaseComponent {
  readonly profileEnvironment = environment

  constructor(
    private router: Router
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
  }
}
