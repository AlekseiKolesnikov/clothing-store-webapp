import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../../local-storage.service";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";
import {LocalStorageKeysService} from "../../../../shared/services/local-storage-keys.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent extends BaseComponent {
  protected readonly profileData = this.localStorageService.getItem(this.localStorageKeysService.getKey().profileKey)
  protected profilePageRoute: string

  constructor(
    private router: Router,
    private appRoutesService: AppRoutesService,
    private readonly localStorageKeysService: LocalStorageKeysService,
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
