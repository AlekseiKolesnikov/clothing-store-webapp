import {Component, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment.development";
import {StatusTableData} from "../../data/status-table.data";

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileStatusComponent {
  protected readonly environment = environment;
  protected readonly statusTableData = StatusTableData;
}
