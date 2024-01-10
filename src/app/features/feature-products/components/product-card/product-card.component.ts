import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent {
  @Input() productImage: string
  @Input() productName: string
  @Input() productPrice: number

  constructor() {
  }
}
