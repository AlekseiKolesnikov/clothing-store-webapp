import {booleanAttribute, Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {TelegramFeedbackModel} from "../../../../shared/models/telegram-ui/telegram-feedback.model";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleCardComponent extends BaseComponent {
  @Input() cardImage: string
  @Input() cardName: string
  @Input() cardLink: string
  @Input({transform: booleanAttribute}) frameIsShown: boolean

  constructor(
    private readonly hapticFeedback: TelegramFeedbackModel
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
    setTimeout(() => {
      this.frameIsShown = true
    }, 500)
    this.hapticFeedback.hapticFeedback()
    // @ts-ignore
    Telegram.WebApp.openLink(this.cardLink, {try_instant_view: true})
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
