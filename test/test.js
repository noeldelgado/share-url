const assert = require('assert');
const shareUrl = require('../');

describe('Facebook', function() {
  it('Compose the share on facebook url string.', function() {
    const u = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgoogle.com';
    assert(shareUrl.facebook({
      u: 'http://google.com'
    }) === u);
  });
});

describe('Whatsapp', function() {
  it('Compose the share on whatsapp url string.', function() {
    const u = 'https://wa.me/?text=Check%20out%20https%3A%2F%2Fgoogle.com';
    assert(shareUrl.whatsapp({
      text: 'Check out https://google.com'
    }) === u);
  });
});


describe('Twitter', function() {
  it('Compose the share on twitter url string.', function() {
    const u = 'https://twitter.com/share?text=custom%20share%20text&in_reply_to=471716611724812288&url=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&hashtags=example%2Cdemo&via=twitterdev&related=twitterapi%2Ctwitter';
    assert(shareUrl.twitter({
      text: 'custom share text',
      in_reply_to: '471716611724812288',
      url: 'https://dev.twitter.com/web/tweet-button',
      hashtags: 'example,demo',
      via: 'twitterdev',
      related: 'twitterapi,twitter'
    }) === u);
  });
});

describe('Pinterest', function() {
  it('Compose the share on pinterest url string.', function() {
    const u = 'https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=http%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20Stop%20Pinterest';
    assert(shareUrl.pinterest({
      url : 'http://www.flickr.com/photos/kentbrew/6851755809/',
      media : 'http://farm8.staticflickr.com/7027/6851755809_df5b2051c9_z.jpg',
      description : 'Next Stop Pinterest'
    }) === u);
  });
});

describe('Reddit', function() {
  it('Compose the submit to reddit url string.', function() {
    const u = 'http://www.reddit.com/submit?url=%2F%2Fwww.reddit.com%2Fbuttons&title=Buttons!';
    assert(shareUrl.reddit({
      url : '//www.reddit.com/buttons',
      title : 'Buttons!'
    }) === u);
  });
});

describe('Linkedin', function() {
  it('', function() {
    const u = 'https://linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Fdeveloper.linkedin.com';
    assert(shareUrl.linkedin({
      url : 'http://developer.linkedin.com',
    }) === u);
  });
});

describe('Email', function() {
  it('Compose the send email url string.', function() {
    const u = 'mailto:nowhere@mozilla.org?cc=nobody%40mozilla.org&subject=This%20is%20the%20subject&body=This%20is%20the%20body%20-%20https%3A%2F%2Fdeveloper.mozilla.org%2F';
    assert(shareUrl.email({
      to : 'nowhere@mozilla.org',
      cc : 'nobody@mozilla.org',
      subject : 'This is the subject',
      body : 'This is the body - https://developer.mozilla.org/'
    }) === u);
  });
});
