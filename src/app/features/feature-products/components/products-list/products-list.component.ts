import {Component, OnInit} from '@angular/core';
import {ProductApiService} from "../../services/api/product-api.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  constructor(
    private readonly productApiService: ProductApiService
  ) {
  }

  ngOnInit() {
    this.productApiService.getProducts().subscribe(itemList => {
      console.log(itemList);
    })
  }
}
