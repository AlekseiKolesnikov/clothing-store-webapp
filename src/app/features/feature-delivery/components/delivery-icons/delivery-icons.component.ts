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
  @Input() className: string
  @Input() frameClassName: boolean
  @Input() buttonOption: number
  @Input() elementIndex: number

  constructor(
    private deliveryOptionsState: DeliveryOptionStateService
  ) {
    super();
  }

  onClick(deliveryOption: number) {
    this.deliveryOptionsState.setState({
      option: deliveryOption,
      isSelected: true
    })
  }
}
