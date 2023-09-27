interface Link {
  getChannelLink(): string,
  setChannelLink(image: string): void
}
export class ChannelLink implements Link {
  private channelUrl: string = 'https://t.me/sneakerheadru'
  constructor() { }

  getChannelLink(): string {
    // @ts-ignore
    return Telegram.WebApp.openTelegramLink(this.channelUrl)
  }

  setChannelLink(url: string): void {
    this.channelUrl = url
  }
}
