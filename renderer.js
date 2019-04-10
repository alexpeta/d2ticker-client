// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var html = require('choo/html');
var devtools = require('choo-devtools');
var choo = require('choo');

var app = choo();

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')());
}

app.use(countStore);
app.route('/', mainView);
app.mount('body');

function mainView(state, emit) {
  return html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </body>
  `;

  function onclick() {
    emit('increment', 1);
  }
}

function countStore(state, emitter) {
  state.count = 0;
  emitter.on('increment', function(count) {
    state.count += count;
    emitter.emit('render');
  });
}
