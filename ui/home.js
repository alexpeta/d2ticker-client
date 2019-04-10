const html = require('choo/html');

module.exports = function(state, emit) {
  function onclick() {
    emit('increment', 1);
  }

  return html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </body>
  `;
};
