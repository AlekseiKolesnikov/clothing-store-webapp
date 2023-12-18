import {Component, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from "../../../../local-storage.service";
import {LocalStorageKeysService} from "../../../../shared/services/local-storage-keys.service";
import {StatusTableService} from "../../services/status-table.service";

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileStatusComponent {
  protected statusTableData = this.statusTableDataService.getData()
  protected readonly profileData = this.localStorageService.getItem(this.localStorageKeysService.getKey().profileKey)

  constructor(
    private localStorageService: LocalStorageService,
    private readonly statusTableDataService: StatusTableService,
    private readonly localStorageKeysService: LocalStorageKeysService
  ) {
  }
}
