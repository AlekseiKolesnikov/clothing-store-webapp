import {Component, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../../local-storage.service";
import {LocalStorageKeysService} from "../../../../shared/services/local-storage-keys.service";

@Component({
    selector: 'app-profile-icon-name',
    templateUrl: './profile-icon-name.component.html',
    styleUrls: ['./profile-icon-name.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProfileIconNameComponent {
    protected readonly profileData = this.localStorageService.getItem(this.localStorageKeysService.getKey().profileKey)

    constructor(
        private localStorageService: LocalStorageService,
        private readonly localStorageKeysService: LocalStorageKeysService
    ) {
    }
}
