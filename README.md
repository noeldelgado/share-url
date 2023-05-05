# share-url

[![NPM Version][npm-image]][npm-url]
[![Minzipped size][bundlephobia-image]][bundlephobic-url]
[![License][license-image]][license-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Libraries.io dependency status for latest release][librariesio-img]][librariesio-url]
[![Total alerts][lgtm-image]][lgtm-url]
[![Language grade: JavaScript][lgtm-grade-image]][lgtm-grade-url]

Generates social sharing urls without downloading its third party scripts. Adaptable to any UI.

**Supported:** [Facebook](#facebook), [Twitter](#twitter), [Telegram](#telegram), [Whatsapp](#whatsapp), [Pinterest](#pinteres), [Reddit](#reddit), [Linkedin](#linkedin), [e-mail](#email).

## Demo
https://noeldelgado.github.io/share-url/

## Dependencies
None

## Installation

**NPM**

```sh
npm i share-url --save
```

Or as a `<script>` tag from a CDN as `ShareUrl`:

**Unkpkg CDN**

```js
<script src="https://unpkg.com/share-url"></script>
```

**jsDelivr CDN**

```js
<script src="https://cdn.jsdelivr.net/npm/share-url"></script>
```

## Usage Example

```jsx
// jsx
<a href={ShareUrl.facebook({ u: 'https://google.com' })}>
  Share on Facebook
</a>
```
```js
// js
document.querySelector('a').href = ShareUrl.facebook({ u: 'https://google.com' });
```

### facebook
[Source](https://developers.facebook.com/docs/plugins/share-button/)
`https://www.facebook.com/sharer.php?u={url}`

```js
ShareUrl.facebook({
  u: 'http://google.com',
});
// => 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgoogle.com'
```

### whatsapp
[Source](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat)
`https://api.whatsapp.com/send?text={text}`

```js
ShareUrl.whatsapp({
  text: 'Check out http://google.com',
});
// => 'https://api.whatsapp.com/send?text=Check%20out%20https%3A%2F%2Fgoogle.com'
```

### telegram
[Source](https://core.telegram.org/widgets/share#custom-buttons)
`https://t.me/share/url?url={url}&text={text}`

```js
ShareUrl.telegram({
  url: 'https://google.com',
  text: 'Check out',
});
// => https://t.me/share/url?url=https%3A%2F%2Fgoogle.com&text=Check%20out
```

### twitter
[Source](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/parameter-reference1)
`https://twitter.com/share?text={text}&url={url}`

```js
ShareUrl.twitter({
  text: 'custom share text',
  in_reply_to: '471716611724812288',
  url: 'https://dev.twitter.com/web/tweet-button',
  hashtags: 'example,demo',
  via: 'twitterdev',
  related: 'twitterapi,twitter',
});
// => 'https://twitter.com/share?text=custom%20share%20text&in_reply_to=471716611724812288&url=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&hashtags=example%2Cdemo&via=twitterdev&related=twitterapi%2Ctwitter'
```

### pinterest
[Source](https://developers.pinterest.com/docs/widgets/save/)
`https://pinterest.com/pin/create/button/?url={url}`

```js
ShareUrl.pinterest({
  url: 'http://www.flickr.com/photos/kentbrew/6851755809/',
  media: 'http://farm8.staticflickr.com/7027/6851755809_df5b2051c9_z.jpg',
  description: 'Next Stop Pinterest',
});
// => 'https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=http%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20Stop%20Pinterest'

```

### reddit
[Source](http://www.reddit.com/buttons/)
`http://www.reddit.com/submit?url={url}`

```js
ShareUrl.reddit({
  url: '//www.reddit.com/buttons',
  title: 'Buttons!',
});
// => 'http://www.reddit.com/submit?url=%2F%2Fwww.reddit.com%2Fbuttons&title=Buttons!'
```

### linkedin
[Source](https://developer.linkedin.com/docs/share-on-linkedin)
`https://linkedin.com/sharing/share-offsite/?url={url}`

```js
ShareUrl.linkedin({
  url: 'http://developer.linkedin.com',
});
// => 'https://linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fdeveloper.linkedin.com'
```

### email
[Source](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links)
`mailto:{to}?subject={subject}&body={body}`

```js
ShareUrl.email({
  to: 'nowhere@mozilla.org',
  cc: 'nobody@mozilla.org',
  subject: 'This is the subject',
  body: 'This is the body - https://developer.mozilla.org/',
});
// => 'mailto:nowhere@mozilla.org?cc=nobody%40mozilla.org&subject=This%20is%20the%20subject&body=This%20is%20the%20body%20-%20https%3A%2F%2Fdeveloper.mozilla.org%2F'
```

## License
MIT © [Noel Delgado](http://pixelia.me/)

[npm-image]: https://img.shields.io/npm/v/share-url.svg?logo=npm&label=NPM
[npm-url]: https://www.npmjs.com/package/share-url
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/share-url?label=size
[bundlephobic-url]: https://bundlephobia.com/result?p=share-url
[license-image]: https://img.shields.io/npm/l/share-url.svg
[license-url]: https://github.com/noeldelgado/share-url/blob/master/LICENSE
[snyk-image]: https://snyk.io/test/npm/share-url/badge.svg
[snyk-url]: https://snyk.io/test/npm/share-url
[librariesio-img]: https://img.shields.io/librariesio/release/npm/share-url
[librariesio-url]: https://libraries.io/npm/share-url
[lgtm-image]: https://img.shields.io/lgtm/alerts/g/noeldelgado/share-url.svg?logo=lgtm&logoWidth=18
[lgtm-url]: https://lgtm.com/projects/g/noeldelgado/share-url/alerts/
[lgtm-grade-image]: https://img.shields.io/lgtm/grade/javascript/g/noeldelgado/share-url.svg?logo=lgtm&logoWidth=18
[lgtm-grade-url]: https://lgtm.com/projects/g/noeldelgado/share-url/context:javascript
