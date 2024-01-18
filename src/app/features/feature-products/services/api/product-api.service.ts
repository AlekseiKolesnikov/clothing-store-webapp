import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface IProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}
@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private readonly menProductsApiUrl = "https://fakestoreapi.com/products/category/men's%20clothing"
  private readonly womanProductsApiUrl = "https://fakestoreapi.com/products/category/women's%20clothing"
  constructor(
    private readonly http: HttpClient
  ) {
  }
  getProductById(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${productId}`)
  }
  getWomanProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.womanProductsApiUrl)
  }

  getMenProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.menProductsApiUrl)
  }
}
