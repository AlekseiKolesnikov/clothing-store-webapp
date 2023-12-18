import {Injectable} from "@angular/core";

export interface FriendsStatisticsData {
  text: string,
  amount: number
}

@Injectable({
  providedIn: 'root'
})
export class FriendsStatisticsService {
  private readonly friendsStatisticsData: FriendsStatisticsData[] = [
    {
      text: "Переходов по ссылке",
      amount: 0
    },
    {
      text: "Сделали заказ",
      amount: 0
    },
    {
      text: "Отправили в РФ",
      amount: 0
    },
    {
      text: "Всего баллов заработанно",
      amount: 0
    }
  ]

  getData(): FriendsStatisticsData[] {
    return this.friendsStatisticsData
  }
}
