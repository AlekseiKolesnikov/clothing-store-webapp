import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FriendEmoji, FriendsEmojiService} from "../services/friends-emoji.service";
import {FriendsStatisticsData, FriendsStatisticsService} from "../services/friends-statistics.service";

@Component({
  selector: 'app-friends-card-page',
  templateUrl: './friends-card-page.component.html',
  styleUrls: ['./friends-card-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FriendsCardPageComponent implements OnInit {
  protected emojisArray: FriendEmoji[] = [];
  protected checkMarkState: boolean = false
  protected friendsEmojiData =this.friendsEmojiService.getData()
  protected friendsStatisticsData: FriendsStatisticsData[]

  constructor(
    private readonly friendsEmojiService: FriendsEmojiService,
    private readonly friendsStatisticsService: FriendsStatisticsService
  ) {
    this.friendsStatisticsData = this.friendsStatisticsService.getData()
  }

  ngOnInit() {
    let index = 0

    const showInterval = setInterval(() => {
      this.emojisArray.push(this.friendsEmojiData[index])
      index++

      if (index == this.friendsEmojiData.length) {
        clearInterval(showInterval)
      }
    }, 300)
  }

  copyClick() {
    this.checkMarkState = true
    // @ts-ignore
    Telegram.WebApp.HapticFeedback.notificationOccurred("success")
  }
}
