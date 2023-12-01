import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ChannelIconService {
  private readonly channelIconData = {
    image: "assets/images/ui-icons/blue-telegram-icon.svg",
    link: "https://t.me/sneakerheadru",
    name: "@sneakerhead"
  }

  getData() {
    return this.channelIconData
  }
}
