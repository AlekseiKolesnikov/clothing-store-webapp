import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../shared/models/base-component.service";

@Component({
  selector: 'app-friends-widget',
  templateUrl: './friends-widget.component.html',
  styleUrls: ['./friends-widget.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class FriendsWidgetComponent extends BaseComponent {

  override click(event: Event) {
    super.click(event);
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
