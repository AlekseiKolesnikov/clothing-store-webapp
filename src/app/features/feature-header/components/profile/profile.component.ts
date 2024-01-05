import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../../local-storage.service";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";
import {ProfileDataService} from "../../services/profile-data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent extends BaseComponent {
  protected readonly profileData = this.profileDataService.getData()
  protected profilePageRoute: string

  constructor(
    private router: Router,
    private appRoutesService: AppRoutesService,
    private readonly profileDataService: ProfileDataService,
    protected readonly localStorageService: LocalStorageService
  ) {
    super();
    this.profilePageRoute = this.appRoutesService.getRoutes().profilePage
  }

  override click(event: Event) {
    super.click(event);
    this.router.navigate([this.profilePageRoute])
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
