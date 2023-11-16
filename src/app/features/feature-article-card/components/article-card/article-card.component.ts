import {booleanAttribute, Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.service";
import {TelegramHapticFeedback} from "../../../../shared/telegram_ui/telegram-haptic-feedback";

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
    private readonly hapticFeedback: TelegramHapticFeedback
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
    setTimeout(() => {
      this.frameIsShown = true
    }, 500)
    this.hapticFeedback.hapticFeedBack()
    // @ts-ignore
    Telegram.WebApp.openLink(this.cardLink, {try_instant_view: true})
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
