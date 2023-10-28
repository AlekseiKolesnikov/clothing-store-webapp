import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../shared/models/base-component.service";

@Component({
  selector: 'app-friends-card',
  templateUrl: './friends-card.component.html',
  styleUrls: ['./friends-card.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class FriendsCardComponent extends BaseComponent {

  override click(event: Event) {
    super.click(event);
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
