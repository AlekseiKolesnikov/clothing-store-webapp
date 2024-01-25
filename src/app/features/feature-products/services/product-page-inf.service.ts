import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {IProductInf} from "../../../shared/interfaces/product-interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductPageInfService {
  private readonly productPageInfData: IProductInf[] = [
    {
      title: "Delivery",
      text: "The average delivery time is 16-18 days. After payment, you will be able to track the delivery statuses and receive notifications about their changes.",
      isFolded: false
    },
    {
      title: "Insurance and safety",
      text: "The price of the product includes its full insurance. It is our responsibility to ensure that you receive your order safely.",
      isFolded: false
    },
    {
      title: "Strictly original",
      text: "We guarantee that all purchased items in Unicorn are original and have been verified for authenticity. If for some reason you have a fake in your hands, we will refund the money in double amount.",
      isFolded: false
    },
  ]
  private readonly productPageInfSubject: BehaviorSubject<IProductInf[]> = new BehaviorSubject<IProductInf[]>(this.productPageInfData)

  setData(index: number) {
    this.productPageInfData[index].isFolded = !this.productPageInfData[index].isFolded
    this.productPageInfSubject.next(this.productPageInfData)
  }

  getData(): Observable<IProductInf[]> {
    return this.productPageInfSubject.asObservable()
  }
}
