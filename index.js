/**
 * share-url v1.0.0
 * @link https://github.com/noeldelgado/share-url
 * @license MIT
 */
(function(root, factory) {
  if (typeof exports === 'object') module.exports = factory(root);
  else root.ShareUrl = factory(root);
}(this, function factory(root) {
  var ENDPOINTS = {
    facebook    : 'https://www.facebook.com/sharer/sharer.php?',
    twitter     : 'https://twitter.com/share?',
    googlePlus  : 'https://plus.google.com/share?',
    pinterest   : 'https://pinterest.com/pin/create/button/?',
    reddit      : 'http://www.reddit.com/submit?',
    delicious   : 'https://delicious.com/save?',
    linkedin    : 'https://www.linkedin.com/shareArticle?'
  };

  return {
    facebook    : facebook,
    twitter     : twitter,
    googlePlus  : googlePlus,
    pinterest   : pinterest,
    reddit      : reddit,
    delicious   : delicious,
    linkedin    : linkedin,
    email       : email
  };

  function _generateUrlParams(data) {
    return Object.keys(data || {}).map(function(propertyName) {
      return propertyName + '=' + encodeURIComponent(data[propertyName]);
    }).join('&');
  }

  /* Compose the share on facebook url string.
   * @argument data [Object] <required>
   * @argument data.u [String] <required>
   * @return url
   */
  function facebook(data) {
    return ENDPOINTS.facebook + _generateUrlParams(data);
  }

  /* Compose the share on twitter url string.
   * @argument data [Object] <required>
   * @argument data.text [String] <optional> Pre-populated text highlighted in the Tweet composer.
   * @argument data.in_reply_to [String] <optional> Status ID string of a parent Tweet such as a Tweet from your account (if applicable).
   * @argument data.url [String] <optional> URL included with the Tweet.
   * @argument data.hashtags [String] <optional> A comma-separated list of hashtags to be appended to default Tweet text.
   * @argument data.via [String] <optional> Attribute the source of a Tweet to a Twitter username.
   * @argument data.related [String] <optional> A comma-separated list of accounts related to the content of the shared URI.
   * @info https://dev.twitter.com/web/tweet-button/parameters
   * @return url
   */
  function twitter(data) {
    return ENDPOINTS.twitter + _generateUrlParams(data);
  }

  /* Compose the share on google+ url string.
   * @argument data [Object] <required>
   * @argument data.url [String] <required> The URL of the page to share.
   * @info https://developers.google.com/+/web/share/
   * @return url
   */
  function googlePlus(data) {
    return ENDPOINTS.googlePlus + _generateUrlParams(data);
  }

  /* Compose the share on pinterest url string.
   * @argument data [Object] <required>
   * @argument data.url <required>
   * @argument data.media <required>
   * @argument data.description <required>
   * @info https://developers.pinterest.com/pin_it/
   * @return url
   */
  function pinterest(data) {
    return ENDPOINTS.pinterest + _generateUrlParams(data);
  }

  /* Compose the submit to reddit url string.
   * @argument data [Object] <required>
   * @argument data.url <required>
   * @argument data.title <optional>
   * @info http://www.reddit.com/buttons/
   * @return url
   */
  function reddit(data) {
    return ENDPOINTS.reddit + _generateUrlParams(data);
  }

  /* Compose the url string to post on delicious.
   * @argument data [Object] <required>
   * @argument url [String] <required>
   * @argument title [String] <optional>
   * @info https://delicious.com/tools
   * @return url
   */
  function delicious(data) {
    return ENDPOINTS.delicious + _generateUrlParams(data);
  }

  /* Compose the share article on linkedin url string.
   * @argument data [Object] <required>
   * @argument data.url [String, 1024] <required> The url-encoded URL of the page that you wish to share.
   * @argument data.mini [Boolean] <required> A required argument who's value must always be: true
   * @argument title [String, 200] <optional> The url-encoded title value that you wish you use.
   * @argument summary [String, 256] <optional> The url-encoded description that you wish you use.
   * @argument source [String, 200] <optional> The url-encoded source of the content (e.g. your website or application name)
   * @info https://developer.linkedin.com/docs/share-on-linkedin
   * @return url
   */
  function linkedin(data) {
    return ENDPOINTS.linkedin + _generateUrlParams(data);
  }

  /* Compose the send email url string.
   * @argument data [Object] <required>
   * @argument to [String] <required>
   * @argument subject [String] <optional>
   * @argument cc [String] <optional>
   * @argument bcc [String] <optional>
   * @argument body [String] <optional>
   * @info https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links
   * @return url
   */
  function email(data) {
    var to = data.to;
    delete data.to;
    var params = _generateUrlParams(data);
    return 'mailto:' + (params.length ? (to + '?' + params) : to);
  }
}));
