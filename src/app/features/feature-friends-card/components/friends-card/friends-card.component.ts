import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Router} from "@angular/router";
import {NavigateFeedbackModel} from "../../../../shared/models/telegram-ui/navigate-feedback-model";
import {AppRoutesService} from "../../../../shared/services/app-routes.service";

@Component({
  selector: 'app-friends-card',
  templateUrl: './friends-card.component.html',
  styleUrls: ['./friends-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FriendsCardComponent extends BaseComponent {
  protected friendsCardPageRoute: string

  constructor(
    private readonly router: Router,
    private appRoutesService: AppRoutesService,
    private readonly hapticFeedback: NavigateFeedbackModel
  ) {
    super();
    this.friendsCardPageRoute = this.appRoutesService.getRoutes().friendsCardPage
  }

  override click(event: Event) {
    super.click(event);
    this.hapticFeedback.feedbackNavigate(this.friendsCardPageRoute)
    this.router.navigate([this.friendsCardPageRoute])
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
