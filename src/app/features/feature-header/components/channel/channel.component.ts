import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment.development";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChannelComponent {
  @Output() buttonClick = new EventEmitter
  readonly channelEnvironment = environment
  constructor() {
  }

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

  protected readonly environment = environment;
}
