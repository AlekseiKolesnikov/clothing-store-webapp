import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Router} from "@angular/router";
import {ProfileDataService} from "../../services/profile-data.service";
import {PROFILE_PAGE} from "../../../../shared/data/app-routes";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent extends BaseComponent {
  protected readonly profileData = this.profileDataService.getData()
  constructor(
    private router: Router,
    private readonly profileDataService: ProfileDataService
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
    this.router.navigate([PROFILE_PAGE])
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
