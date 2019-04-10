const html = require('choo/html');

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
