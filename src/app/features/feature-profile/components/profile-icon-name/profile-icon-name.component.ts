import {Component, ViewEncapsulation} from '@angular/core';
import {ProfileDataService} from "../../../feature-header/services/profile-data.service";

@Component({
    selector: 'app-profile-icon-name',
    templateUrl: './profile-icon-name.component.html',
    styleUrls: ['./profile-icon-name.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfileIconNameComponent {
    protected readonly profileData = this.profileDataService.getData()

    constructor(
      private readonly profileDataService: ProfileDataService
    ) {
    }
}
