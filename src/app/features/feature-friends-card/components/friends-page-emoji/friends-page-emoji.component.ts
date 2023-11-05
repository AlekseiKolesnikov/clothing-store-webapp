import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-friends-page-emoji',
  templateUrl: './friends-page-emoji.component.html',
  styleUrls: ['./friends-page-emoji.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FriendsPageEmojiComponent {
  @Input() emoji: string
  @Input() emojiAlt: string
  @Input() backgroundColor: string
  @Input() width: string
}
