import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.service";
import {LocalStorageService} from "../../../../local-storage.service";
import {localStorageKeys} from "../../../../shared/data/local-storage-keys";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChannelComponent extends BaseComponent {
  protected readonly channelIconData = this.localStorageService.getItem(localStorageKeys.channelIconKey)

  constructor(
    protected readonly localStorageService: LocalStorageService
  ) {
    super();
  }

  override click(event: Event) {
    super.click(event);
    // @ts-ignore
    Telegram.WebApp.openTelegramLink(this.channelIconData.link)
  }
}
