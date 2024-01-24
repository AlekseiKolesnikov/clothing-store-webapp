import {Injectable} from "@angular/core";
import {FriendEmoji} from "../../../shared/interfaces/friends-data-interfaces";

@Injectable({
  providedIn: 'root'
})
export class FriendsEmojiService {
  private readonly friendsEmojiArray = [
    {
      image: "./assets/images/emoji/curly_guy.png",
      name: "curly guy",
      backgroundColor: "#FFC8C8FF",
      width: "140px",
      className: "curly-guy-emoji"
    },
    {
      image: "./assets/images/emoji/beard_guy.png",
      name: "beard guy",
      backgroundColor: "#C0C7FFFF",
      width: "100px",
      className: "beard-guy-emoji"
    },
    {
      image: "./assets/images/emoji/kissing_girl.png",
      name: "kissing girl",
      backgroundColor: "#FBCCFFFF",
      width: "110px",
      className: "kissing-girl-emoji"
    },
    {
      image: "./assets/images/emoji/celebrating_girl.png",
      name: "celebrating girl",
      backgroundColor: "#E9DBABFF",
      width: "80px",
      className: "celebrating-girl-emoji"
    },
    {
      image: "./assets/images/emoji/glasses_guy.png",
      name: "glasses guy",
      backgroundColor: "#CAE0F0FF",
      width: "80px",
      className: "glasses-guy-emoji"
    },
    {
      image: "./assets/images/emoji/love_girl.png",
      name: "love girl",
      backgroundColor: "#C9E293FF",
      width: "60px",
      className: "love-girl-emoji"
    },
    {
      image: "./assets/images/emoji/wow_girl.png",
      name: "wow girl",
      backgroundColor: "#ACDBC5FF",
      width: "60px",
      className: "wow-girl-emoji"
    }
  ]

  getData(): FriendEmoji[] {
    return this.friendsEmojiArray
  }
}
