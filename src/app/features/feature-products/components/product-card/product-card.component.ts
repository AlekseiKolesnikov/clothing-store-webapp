import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent extends BaseComponent{
  @Input() productImage: string
  @Input() productName: string
  @Input() productPrice: string
  constructor(
  ) {
    super();
  }

  override click(event: any) {
    super.click(event);
  }

  override touch(event: any) {
    super.touch(event);
  }
}
