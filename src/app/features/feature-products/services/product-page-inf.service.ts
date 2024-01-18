import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

export interface IProductInf {
  title: string
  text: string
  isFolded: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ProductPageInfService {
  private readonly productPageInfData: IProductInf[] = [
    {
      title: "Доставка",
      text: "Среднее время доставки 16–18 дней. После оплаты вы сможете отслеживать статусы доставки и получать уведомления об их изменении.",
      isFolded: false
    },
    {
      title: "Страховка и безопасность",
      text: "В стоимость товара входит его полное страхование. Мы несем ответственность, чтобы вы получили свой заказ в целости и сохранности.",
      isFolded: false
    },
    {
      title: "Строго оригинал",
      text: "Мы гарантируем, что все купленные товары в Unicorn оригинальные и прошли проверку на подлинность. Если по каким-то причинам у вас на руках окажется подделка — мы вернем деньги в двойном размере.",
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
