import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {SizeOptionStateService} from "../../services/size-option-state.service";

@Component({
  selector: 'app-product-sizes',
  templateUrl: './product-sizes.component.html',
  styleUrls: ['./product-sizes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSizesComponent extends BaseComponent{
  @Input() text: string
  @Input() elementIndex: number
  @Input() isSelected: boolean

  constructor(
    private readonly sizeOptionStateService: SizeOptionStateService
  ) {
    super();
  }

  onClick(index: number) {
    this.sizeOptionStateService.setState(index)
  }
}
