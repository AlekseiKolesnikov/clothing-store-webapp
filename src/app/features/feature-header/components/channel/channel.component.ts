import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {channelEnvironment} from "../../environments/channel.environment";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChannelComponent {
  @Output() buttonClick = new EventEmitter
  readonly environment = channelEnvironment
  constructor() {}

  click(): void {
    // @ts-ignore
    Telegram.WebApp.openTelegramLink(this.channelEnvironment.channelLink)
    this.buttonClick.emit()
  }
  touch(event: Event) {
    // @ts-ignore
    Telegram.WebApp.openTelegramLink(this.channelEnvironment.channelLink)
    event.preventDefault()
    this.buttonClick.emit()
  }
}
