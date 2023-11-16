import {Component, Input, ViewEncapsulation} from '@angular/core';
import {DeliveryIconLayoutModel} from "../../models/delivery-icon-layout.model";
import {BaseComponent} from "../../../../shared/models/base-component.service";

@Component({
  selector: 'app-delivery-icons',
  templateUrl: './delivery-icons.component.html',
  styleUrls: ['./delivery-icons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeliveryIconsComponent extends BaseComponent {
  @Input() iconName: string
  @Input() icon: string
  @Input() text: string
  @Input() className: string

  constructor(
    private deliveryIconLayout: DeliveryIconLayoutModel
  ) {
    super();
  }

  onClick(deliveryOption: string, element: HTMLElement) {
    this.deliveryIconLayout.getLayout(element)
  }
}
