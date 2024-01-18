import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ISize, SizeOptionStateService} from "../../services/size-option-state.service";
import {ProductApiService} from "../../services/api/product-api.service";
import {SIZE_TABLE_PAGE} from "../../../../shared/data/app-routes";
import {IProductInf, ProductPageInfService} from "../../services/product-page-inf.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: [
    './product-page.component.scss',
    '../../../../core/page/main-page.component.scss',
    '../../../feature-article-card/components/article-card/article-card.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProductPageComponent implements OnInit, OnDestroy {
  protected productImage: string
  protected productPrice: string
  protected productTitle: string
  protected productDescription: string
  protected productRating: number
  protected productID: number
  protected sizeIconData: Array<ISize>
  protected productPageInfData: Array<IProductInf>
  protected productStoreService$: Subscription
  protected sizeIconData$: Subscription
  protected productPageInfService$: Subscription
  protected readonly SIZE_TABLE_PAGE = SIZE_TABLE_PAGE;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productApiService: ProductApiService,
    private readonly sizeOptionStateService: SizeOptionStateService,
    private readonly productPageInfService: ProductPageInfService
  ) {
    this.route.queryParams.subscribe(params => this.productID = params['id'])
  }

  ngOnInit() {
    this.productStoreService$ = this.productApiService.getProductById(this.productID.toString()).subscribe(
      value => {
        this.productImage = value.image
        this.productPrice = value.price.toString()
        this.productTitle = value.title
        this.productDescription = value.description
        this.productRating = value.rating.rate
      })
    this.sizeIconData$ = this.sizeOptionStateService.getState().subscribe(data => {
      this.sizeIconData = data
    })
    this.productPageInfService$ = this.productPageInfService.getData().subscribe(value => {
      this.productPageInfData = value
    })
  }

  ngOnDestroy() {
    this.productStoreService$.unsubscribe()
    this.productPageInfService$.unsubscribe()
  }
}
