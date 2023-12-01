import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StatusTableService {
  private readonly statusTableDataArray = [
    {
      status: "Status",
      pointsForOrder: "Points for the order",
      orders: "Заказов"
    },
    {
      status: "Новичок",
      pointsForOrder: "+50",
      orders: "0"
    },
    {
      status: "Модник",
      pointsForOrder: "+150",
      orders: "3"
    },
    {
      status: "Професионал",
      pointsForOrder: "+250",
      orders: "10"
    },
    {
      status: "Шопоголик",
      pointsForOrder: "+350",
      orders: "20"
    },
    {
      status: "Фэшн Киллер",
      pointsForOrder: "+500",
      orders: "30"
    }
  ]

  getData() {
    return this.statusTableDataArray
  }
}
