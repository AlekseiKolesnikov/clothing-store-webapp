import {Component, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../../../environments/environment.development";
import {BaseComponent} from "../../../../shared/models/base-component.service";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChannelComponent extends BaseComponent {
  readonly channelEnvironment = environment
  constructor() {
    super();
  }

  override click(event: Event) {
    super.click(event);
    // @ts-ignore
    Telegram.WebApp.openTelegramLink(this.channelEnvironment.channelLink)
  }
}
