import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChannelIcon} from "../../modules/module-channel/channel-icon";
import {ChannelLink} from "../../modules/module-channel/channel-link";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChannelComponent implements OnInit {
  channelIcon: ChannelIcon
  channelLink: ChannelLink
  constructor() {
    this.channelIcon = new ChannelIcon()
    this.channelLink = new ChannelLink()
  }

  ngOnInit() {
    console.log(this.channelLink)
  }
}
