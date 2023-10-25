import {booleanAttribute, Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.service";

@Component({
  selector: 'app-article-widget',
  templateUrl: './article-widget.component.html',
  styleUrls: ['./article-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleWidgetComponent extends BaseComponent {
  @Input() widgetImage: string
  @Input() widgetName: string
  @Input() widgetLink: string
  @Input({transform: booleanAttribute}) frameIsShown: boolean

  override click(event: Event) {
    super.click(event);
    this.frameIsShown = true

    // @ts-ignore
    Telegram.WebApp.openLink(this.widgetLink, {try_instant_view: true})
  }
}
