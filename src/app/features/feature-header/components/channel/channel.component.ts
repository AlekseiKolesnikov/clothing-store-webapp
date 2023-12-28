import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {ChannelIconService} from "../../services/channel-icon.service";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChannelComponent extends BaseComponent {
  protected readonly channelIconData = this.channelIconService.getData()

  constructor(
    private readonly channelIconService: ChannelIconService
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
    // @ts-ignore
    Telegram.WebApp.openTelegramLink(this.channelIconData.link)
  }

  override touch(event: Event) {
    super.touch(event);
  }
}
