import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FriendEmoji, friendsPageData} from "../data/friends-page.data";

@Component({
  selector: 'app-friends-card-page',
  templateUrl: './friends-card-page.component.html',
  styleUrls: ['./friends-card-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FriendsCardPageComponent implements OnInit {
  protected emojiData: FriendEmoji[] = [];
  protected checkMarkState:boolean = false

  ngOnInit() {
    let index = 0

    const showInterval = setInterval(() => {
      this.emojiData.push(friendsPageData[index])
      index++

      if (index == friendsPageData.length) {
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
