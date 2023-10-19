import {Component, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../../local-storage.service";
import {localStorageKeys} from "../../../../shared/data/local-storage-keys";

@Component({
    selector: 'app-profile-icon-name',
    templateUrl: './profile-icon-name.component.html',
    styleUrls: ['./profile-icon-name.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfileIconNameComponent {
    protected readonly profileData = this.localStorageService.getItem(localStorageKeys.profileKey)

    constructor(
        private localStorageService: LocalStorageService
    ) {
    }
}
