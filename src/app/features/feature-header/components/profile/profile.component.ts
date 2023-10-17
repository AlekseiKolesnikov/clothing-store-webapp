import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../../../local-storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent extends BaseComponent {
  protected readonly profileData = this.localStorageService.getItem('profileData')

  constructor(
    private router: Router,
    protected readonly localStorageService: LocalStorageService
  ) {
    super();
  }

  override click(event: Event) {
    this.router.navigate(['profile-page'])
    super.click(event);
  }
}
