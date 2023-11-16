import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.service";
import {Router} from "@angular/router";
import {appRoutes} from "../../../../shared/data/app-routes";
import {TelegramHapticFeedback} from "../../../../shared/telegram_ui/telegram-haptic-feedback";

@Component({
  selector: 'app-friends-card',
  templateUrl: './friends-card.component.html',
  styleUrls: ['./friends-card.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class FriendsCardComponent extends BaseComponent {

  constructor(
    private readonly router: Router,
    private readonly hapticFeedback: TelegramHapticFeedback
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
    this.hapticFeedback.hapticFeedBack()
    this.router.navigate([appRoutes.friendsCardPage])
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
