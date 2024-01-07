import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {DeliveryOptionStateService} from "../../services/delivery-option-state.service";


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
  @Input() elementIndex: number
  @Input() isSelected: boolean

  constructor(
    private deliveryOptionsState: DeliveryOptionStateService
  ) {
    super();
  }

  onClick(deliveryOption: number) {
    this.deliveryOptionsState.setState(deliveryOption)
  }
}
