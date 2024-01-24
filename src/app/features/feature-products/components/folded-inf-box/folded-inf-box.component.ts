import {Component, Input, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {ProductPageInfService} from "../../services/product-page-inf.service";

@Component({
  selector: 'app-folded-inf-box',
  templateUrl: './folded-inf-box.component.html',
  styleUrls: ['./folded-inf-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FoldedInfBoxComponent extends BaseComponent {
  @Input() title: string
  @Input() text: string
  @Input() index: number
  @Input() isFolded: boolean
  constructor(
    private readonly productPageInfService: ProductPageInfService
  ) {
    super();
  }

  override click(event: any) {
    super.click(event);
    this.productPageInfService.setData(this.index)
  }

  override touch(event: any) {
    super.touch(event);
  }
}
