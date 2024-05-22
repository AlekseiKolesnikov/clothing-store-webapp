import {Injectable} from "@angular/core";
import {FriendsStatisticsData} from "../../../shared/interfaces/friends-data-interfaces";

@Injectable({
  providedIn: 'root'
})
export class FriendsStatisticsService {
  private readonly friendsStatisticsData: FriendsStatisticsData[] = [
    {
      text: "Referral link traffic",
      amount: 0
    },
    {
      text: "Completed orders",
      amount: 0
    },
    {
      text: "Send to Russian",
      amount: 0
    },
    {
      text: "Total points earned",
      amount: 0
    }
  ]

  getData(): FriendsStatisticsData[] {
    return this.friendsStatisticsData
  }
}
