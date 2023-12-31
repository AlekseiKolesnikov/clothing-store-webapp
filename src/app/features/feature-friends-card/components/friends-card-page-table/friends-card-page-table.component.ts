import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-friends-card-page-table',
  templateUrl: './friends-card-page-table.component.html',
  styleUrls: ['./friends-card-page-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FriendsCardPageTableComponent {
  @Input() text: string
  @Input() amount: number
}
