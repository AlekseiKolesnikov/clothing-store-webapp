import {Component, ViewEncapsulation} from '@angular/core';
import {BaseComponent} from "../../../../shared/models/base-component.model";
import {LocalStorageService} from "../../../../local-storage.service";
import {LocalStorageKeysService} from "../../../../shared/services/local-storage-keys.service";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChannelComponent extends BaseComponent {
  protected readonly channelIconData = this.localStorageService.getItem(this.localStorageKeysService.getKey().channelIconKey)

  constructor(
    protected readonly localStorageService: LocalStorageService,
    private readonly localStorageKeysService: LocalStorageKeysService
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
