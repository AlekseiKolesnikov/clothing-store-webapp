import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChannelIcon} from "../../../modules/module-channel/channel-icon";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChannelComponent implements OnInit {
  channelIcon: ChannelIcon
  constructor() {
    this.channelIcon = new ChannelIcon()
  }

  ngOnInit() {

  }
}
