# share-url

[![NPM Version][npm-image]][npm-url]
[![Minzipped size][bundlephobia-image]][bundlephobic-url]
[![License][license-image]][license-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Libraries.io dependency status for latest release][librariesio-img]][librariesio-url]
[![Total alerts][lgtm-image]][lgtm-url]
[![Language grade: JavaScript][lgtm-grade-image]][lgtm-grade-url]

Generates social sharing url strings so you can use whatever ui you want without downloading its third party scripts.

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

## Usage Examples

```js
const ShareUrl = require('share-url');
```

### facebook

```js
ShareUrl.facebook({
	u: 'http://google.com',
});
// => 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgoogle.com'
```

### whatsapp

```js
ShareUrl.whatsapp({
	text: 'Check out http://google.com',
});
// => 'https://wa.me/?text=Check%20out%20https%3A%2F%2Fgoogle.com'
```

### telegram

```js
ShareUrl.telegram({
	url: 'https://google.com',
	text: 'Check out',
});
// => https://t.me/share/url?url=https%3A%2F%2Fgoogle.com&text=Check%20out
```

### twitter
https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/parameter-reference1

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
https://developers.pinterest.com/docs/widgets/save/

```js
ShareUrl.pinterest({
	url: 'http://www.flickr.com/photos/kentbrew/6851755809/',
	media: 'http://farm8.staticflickr.com/7027/6851755809_df5b2051c9_z.jpg',
	description: 'Next Stop Pinterest',
});
// => 'https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=http%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20Stop%20Pinterest'

```

### reddit
http://www.reddit.com/buttons/

```js
ShareUrl.reddit({
	url: '//www.reddit.com/buttons',
	title: 'Buttons!',
});
// => 'http://www.reddit.com/submit?url=%2F%2Fwww.reddit.com%2Fbuttons&title=Buttons!'
```

### linkedin
https://developer.linkedin.com/docs/share-on-linkedin

```js
ShareUrl.linkedin({
	url: 'http://developer.linkedin.com',
});
// => 'https://linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fdeveloper.linkedin.com'
```

### email
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links

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