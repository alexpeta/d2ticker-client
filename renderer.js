// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var devtools = require('choo-devtools');
var choo = require('choo');

var body = require('./ui/body');
var home = require('./ui/home');

var app = choo();

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')());
}

app.use(countStore);

app.route('/', body(home));
app.mount('body');

function countStore(state, emitter) {
  state.count = 0;
  emitter.on('increment', function(count) {
    state.count += count;
    emitter.emit('render');
  });
}
