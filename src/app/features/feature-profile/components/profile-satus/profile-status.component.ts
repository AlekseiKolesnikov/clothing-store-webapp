import {Component, ViewEncapsulation} from '@angular/core';
import {StatusTableService} from "../../services/status-table.service";
import {ProfileDataService} from "../../../feature-header/services/profile-data.service";

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileStatusComponent {
  protected statusTableData = this.statusTableDataService.getData()
  protected readonly profileData = this.profileDataService.getData()

  constructor(
    private readonly statusTableDataService: StatusTableService,
    private readonly profileDataService: ProfileDataService
  ) {
  }
}
