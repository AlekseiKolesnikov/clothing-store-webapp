import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ArticlesCardDataService {
  private readonly articlesCardData = [
    {
      image: "assets/images/article-icons-en/delivery.svg",
      name: "delivery",
      link: "https://teletype.in/@poizonshop/unicorn_delivery"
    },
    {
      image: "assets/images/article-icons-en/sale.svg",
      name: "sale",
      link: "https://teletype.in/@poizonshop/3cCsvxgkyst"
    },
    {
      image: "assets/images/article-icons-en/size.svg",
      name: "size",
      link: "https://teletype.in/@poizonshop/OQcKye7pfnu"
    },
    {
      image: "assets/images/article-icons-en/warranty.svg",
      name: "warranty",
      link: "https://teletype.in/@poizonshop/guarantees"
    },
    {
      image: "assets/images/article-icons-en/payment.svg",
      name: "payment",
      link: "https://teletype.in/@poizonshop/dfMWWvomM7D"
    },
    {
      image: "assets/images/article-icons-en/location.svg",
      name: "location",
      link: "https://teletype.in/@poizonshop/showroom"
    },
    {
      image: "assets/images/article-icons-en/FAQ.svg",
      name: "FAQ",
      link: "https://teletype.in/@poizonshop/FAQ"
    }
  ]

  getData() {
    return this.articlesCardData
  }
}
