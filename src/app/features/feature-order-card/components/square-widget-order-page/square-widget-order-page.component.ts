import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";

@Component({
  selector: 'app-square-widget-order-page',
  templateUrl: './square-widget-order-page.component.html',
  styleUrls: ['./square-widget-order-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SquareWidgetOrderPageComponent extends BaseComponent {
  @Input() iconLink: string
  @Input() iconLinkText: string
  @Input() text: string
  @Input() arrow: string
  @Input() boxColor: string

  override click(event: Event) {
    super.click(event);
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
