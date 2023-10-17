import {Component, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../../local-storage.service";

@Component({
    selector: 'app-profile-icon-name',
    templateUrl: './profile-icon-name.component.html',
    styleUrls: ['./profile-icon-name.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfileIconNameComponent {
    protected readonly profileData = this.localStorageService.getItem('profileData')

    constructor(
        private localStorageService: LocalStorageService
    ) {
    }
}
