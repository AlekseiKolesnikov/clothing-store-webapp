import {Component, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment.development";

@Component({
  selector: 'app-profile-icon-name',
  templateUrl: './profile-icon-name.component.html',
  styleUrls: ['./profile-icon-name.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileIconNameComponent {
  protected readonly environment = environment;
}
