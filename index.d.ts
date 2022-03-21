declare module 'share-url' {
  export type FacebookOptions = {
    u: string
  }

  export type TwitterOptions = {
    text?: string
    in_reply_to?: string
    url?: string
    hashtags?: string
    via?: string
    related?: string
  }

  export type PinterestOptions = {
    url: string
    media?: string
    description?: string
  }

  export type RedditOptions = {
    url: string
    title?: string
    text?: string
  }

  export type LinkedinOptions = {
    url: string
  }

  export type EmailOptions = {
    to: string
    subject?: string
    cc?: string
    bcc?: string
    body?: string
  }

  interface IShareUrl {
    facebook(options: FacebookOptions): string
    twitter(options: TwitterOptions): string
    pinterest(options: PinterestOptions): string
    reddit(options: RedditOptions): string
    linkedin(options: LinkedinOptions): string
    email(options: EmailOptions): string
  }

  const ShareUrl: IShareUrl
  export default ShareUrl
}
