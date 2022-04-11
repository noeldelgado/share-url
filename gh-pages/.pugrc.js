const pkg = require('../package.json');
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(['bash', 'jsx']);

const LIB_VERSION = pkg.version;
const HOMEPAGE = pkg.homepage;

module.exports = {
  locals: {
    LIB_VERSION,
    HOMEPAGE,
    REPO_URL: 'https://github.com/noeldelgado/share-url',
  },
  filters: {
    'prism': (text, options) => {
      return Prism.highlight(text, Prism.languages[options.lang], options.lang)
    }
  }
};
