import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_DOMAIN = "https://fakestoreapi.com"

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
  private readonly menProductsApiUrl = `${API_DOMAIN}/products/category/men's%20clothing`
  private readonly womanProductsApiUrl = `${API_DOMAIN}/products/category/women's%20clothing`
  constructor(
    private readonly http: HttpClient
  ) {
  }
  getProductById(productId: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${API_DOMAIN}/products/${productId}`)
  }
  getWomanProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.womanProductsApiUrl)
  }

  getMenProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.menProductsApiUrl)
  }
}
