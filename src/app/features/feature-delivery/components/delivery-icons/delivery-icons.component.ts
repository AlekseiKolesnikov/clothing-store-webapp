import {Component, Input, ViewEncapsulation} from '@angular/core';
import {FrameIconLayoutModel} from "../../../../shared/models/frame-icon-layout.model";
import {BaseComponent} from "../../../../shared/models/base-component.service";
import {DeliveryOptionStateService} from "../../service/delivery-option-state.service";

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
  @Input() frameClassName: string
  @Input() elementIndex: number

  constructor(
    private frameIconLayoutModel: FrameIconLayoutModel,
    private deliveryOptionsState: DeliveryOptionStateService
  ) {
    super();
  }

  onClick(deliveryOption: string, elementIndex: number) {
    this.frameIconLayoutModel.getLayout(elementIndex)
    this.deliveryOptionsState.setState(deliveryOption)
  }
}
