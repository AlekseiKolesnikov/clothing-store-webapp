import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {Router} from "@angular/router";
import {PRODUCT_PAGE} from "../../../../shared/data/app-routes";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent extends BaseComponent {
  @Input() productImage: string
  @Input() productName: string
  @Input() productPrice: string
  @Input() productID: number
  constructor(
    private readonly router: Router
  ) {
    super();
  }

  override click(event: any) {
    super.click(event);
    this.router.navigate([PRODUCT_PAGE], {
      queryParams: {
        id: this.productID
      }
    })
  }

  override touch(event: any) {
    super.touch(event);
  }
}
