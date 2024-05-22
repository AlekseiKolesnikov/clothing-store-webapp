import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../../../../shared/interfaces/product-interfaces";

const PRODUCTS_API_DOMAIN = "https://fakestoreapi.com"

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private readonly menProductsApiUrl = `${PRODUCTS_API_DOMAIN}/products/category/men's%20clothing`
  private readonly womanProductsApiUrl = `${PRODUCTS_API_DOMAIN}/products/category/women's%20clothing`
  constructor(
    private readonly http: HttpClient
  ) {
  }
  getWomanProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.womanProductsApiUrl)
  }

  getMenProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.menProductsApiUrl)
  }
}
