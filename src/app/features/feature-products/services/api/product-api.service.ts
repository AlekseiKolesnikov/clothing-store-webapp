import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  protected offsetParam = 0
  protected limitParam = 16
  protected productsApiUrl = `https://api.escuelajs.co/api/v1/products/?offset=${this.offsetParam}&limit=${this.limitParam}&categoryId=1`
  constructor(
    private readonly http: HttpClient
  ) {}

  getProducts(): Observable<IProduct[]> {
    this.offsetParam += this.limitParam
    return this.http.get<IProduct[]>(this.productsApiUrl)
  }
}