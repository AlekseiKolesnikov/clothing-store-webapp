import {Component, ViewEncapsulation} from '@angular/core';
import {StatusTableData} from "../../data/status-table.data";
import {LocalStorageService} from "../../../../local-storage.service";
import {localStorageKeys} from "../../../../shared/data/local-storage-keys";

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileStatusComponent {
  protected readonly statusTableData = StatusTableData;
  protected readonly profileData = this.localStorageService.getItem(localStorageKeys.profileKey)

  constructor(
    private localStorageService: LocalStorageService
  ) {
  }
}
