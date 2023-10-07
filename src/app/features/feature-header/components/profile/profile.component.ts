import {Component, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment.development";
import {BaseComponent} from "../../../../shared/models/base-component.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent extends BaseComponent {
  readonly profileEnvironment = environment
  constructor(
     private router: Router
  ) {
    super();
  }

  override click(event: Event) {
    this.router.navigate(['profile-page'])
    super.click(event);
  }
}
