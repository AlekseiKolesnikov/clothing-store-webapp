import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";

@Component({
  selector: 'app-full-screen-widget-order-page',
  templateUrl: './full-screen-widget-order-page.component.html',
  styleUrls: ['./full-screen-widget-order-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FullScreenWidgetOrderPageComponent extends BaseComponent {
  @Input() iconLink: string
  @Input() iconLinkText: string
  @Input() text: string
  @Input() arrow: string

  override click(event: Event) {
    super.click(event);
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
