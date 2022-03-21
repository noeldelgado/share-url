# share-url

[![npm-image](https://img.shields.io/npm/v/share-url.svg?style=flat-square)](https://www.npmjs.com/package/share-url)

Generates social sharing url strings so you can use whatever ui you want without downloading its third party scripts.


## Dependencies
None

## Installation

**NPM**

```sh
npm i share-url --save
```

## Usage Examples

```js
var ShareUrl = require('share-url');
```

### facebook

```js
var config = {
 u : 'http://google.com'
};

ShareUrl.facebook(config);

=> 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgoogle.com'
```

### twitter
https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/parameter-reference1

```js
var config = {
	text: 'custom share text',
	in_reply_to: '471716611724812288',
	url: 'https://dev.twitter.com/web/tweet-button',
	hashtags: 'example,demo',
	via: 'twitterdev',
	related: 'twitterapi,twitter'
};

ShareUrl.twitter(config);

=> 'https://twitter.com/share?text=custom%20share%20text&in_reply_to=471716611724812288&url=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&hashtags=example%2Cdemo&via=twitterdev&related=twitterapi%2Ctwitter'
```

### pinterest
https://developers.pinterest.com/docs/widgets/save/

```js
var config = {
	url : 'http://www.flickr.com/photos/kentbrew/6851755809/',
	media : 'http://farm8.staticflickr.com/7027/6851755809_df5b2051c9_z.jpg',
	description : 'Next Stop Pinterest'
};

ShareUrl.pinterest(config);

=> 'https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=http%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20Stop%20Pinterest'

```

### reddit
http://www.reddit.com/buttons/

```js
var config = {
	url : '//www.reddit.com/buttons',
	title : 'Buttons!'
};

ShareUrl.reddit(config);

=> 'http://www.reddit.com/submit?url=%2F%2Fwww.reddit.com%2Fbuttons&title=Buttons!'
```

### linkedin
https://developer.linkedin.com/docs/share-on-linkedin

```js
var config = {
	url : 'http://developer.linkedin.com',
};

ShareUrl.linkedin(config);

=> 'https://linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fdeveloper.linkedin.com'
```

### email
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links

```js
var config = {
	to : 'nowhere@mozilla.org',
	cc : 'nobody@mozilla.org',
	subject : 'This is the subject',
	body : 'This is the body - https://developer.mozilla.org/'
};

ShareUrl.email(config);

=> 'mailto:nowhere@mozilla.org?cc=nobody%40mozilla.org&subject=This%20is%20the%20subject&body=This%20is%20the%20body%20-%20https%3A%2F%2Fdeveloper.mozilla.org%2F'
```

### ~~google+~~
~~https://developers.google.com/+/web/share/~~


```js
var config = {
	url: 'http://google.com'
};

ShareUrl.googlePlus(config);

=> 'https://plus.google.com/share?url=http%3A%2F%2Fgoogle.com'
```

### ~~delicious~~
~~https://delicious.com/tools~~

```js
var config = {
	url : 'https://delicious.com/tools',
	title : 'Delicious'
};

ShareUrl.delicious(config);

=> 'https://delicious.com/save?url=https%3A%2F%2Fdelicious.com%2Ftools&title=Delicious'
```

## License
MIT © [Noel Delgado](http://pixelia.me/)
