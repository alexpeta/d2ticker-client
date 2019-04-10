const html = require('choo/html');
// const Promo = require('./promo');
// const Header = require('./header');
// const Footer = require('./footer');

// function banner(state) {
//   if (state.layout) {
//     return; // server side
//   }
//   const show =
//     !state.capabilities.standalone &&
//     !/firefox/i.test(navigator.userAgent) &&
//     document.querySelector('html').lang.startsWith('en') &&
//     !state.route.startsWith('/unsupported/');
//   if (show) {
//     return state.cache(Promo, 'promo').render();
//   }
// }

module.exports = function body(main) {
  return function(state, emit) {
    const b = html`
      <body
        class="flex flex-col items-center font-sans md:h-screen md:bg-grey-lightest"
      >
        ${main(state, emit)}
      </body>
    `;
    return b;
  };
};
