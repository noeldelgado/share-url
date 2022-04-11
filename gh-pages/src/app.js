import ShareUrl, { facebook, twitter, whatsapp, telegram, pinterest, reddit, linkedin } from '../../';

console.log(ShareUrl);
window.ShareUrl = ShareUrl;

const $ = document.querySelector.bind(document);
const internals = {};

internals.form = $('#demo-form-main-url');
internals.inputUrl = $('input[type="url"]');

internals.outputs = [
  {
    el: $('[data-demo-output="facebook"]'),
    method: facebook,
    options: (opts) => ({ u: opts.u })
  },
  {
    el: $('[data-demo-output="whatsapp"]'),
    method: whatsapp,
    options: (opts) => ({ text: opts.text })
  },
  {
    el: $('[data-demo-output="twitter"]'),
    method: twitter,
  },
  {
    el: $('[data-demo-output="telegram"]'),
    method: telegram,
  },
  {
    el: $('[data-demo-output="pinterest"]'),
    method: pinterest,
  },
  {
    el: $('[data-demo-output="reddit"]'),
    method: reddit,
  },
  {
    el: $('[data-demo-output="linkedin"]'),
    method: linkedin,
  }
];

internals.content = (url) => `${url} <a href="${url}" rel="noopener noreferrer" target="_blank">Test</a>`;

internals.updateOutputs = (val) => {
  let u, url, text;
  u = url = text = val;
  internals.outputs.forEach((o) => {
    o.el.innerHTML = internals.content(
      o.method(
        o.options?.({ u, url, text }) ?? { url }
      )
    );
  });
};

internals.form?.addEventListener('submit', (ev) => {
  ev.preventDefault();
  console.log(ev.target.url.value);
  internals.updateOutputs(ev.target.url.value);
});

internals.updateOutputs(internals.inputUrl?.value)
