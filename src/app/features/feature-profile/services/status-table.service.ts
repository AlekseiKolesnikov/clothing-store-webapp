import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StatusTableService {
  private readonly statusTableDataArray = [
    {
      status: "Status",
      pointsForOrder: "Points per order",
      orders: "Orders"
    },
    {
      status: "Beginner",
      pointsForOrder: "+50",
      orders: "0"
    },
    {
      status: "Fashionista",
      pointsForOrder: "+150",
      orders: "3"
    },
    {
      status: "Professional",
      pointsForOrder: "+250",
      orders: "10"
    },
    {
      status: "Shopaholic",
      pointsForOrder: "+350",
      orders: "20"
    },
    {
      status: "Fashion Killer",
      pointsForOrder: "+500",
      orders: "30"
    }
  ]

  getData() {
    return this.statusTableDataArray
  }
}
