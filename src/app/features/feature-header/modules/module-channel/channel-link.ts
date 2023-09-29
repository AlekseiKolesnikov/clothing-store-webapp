interface Link {
  getChannelLink(): string
}
export class ChannelLink implements Link {
  constructor(
    private channelUrl: string = 'https://t.me/sneakerheadru'
  ) { }

  getChannelLink(): string {
    // @ts-ignore
    return Telegram.WebApp.openTelegramLink(this.channelUrl)
  }
}
