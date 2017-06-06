import choo from 'choo';

import main from './routes/main';

const app = choo();

app.use(setupState);

app.route('/', main);

app.mount('body');

function setupState(state, emitter) {
  state.machineslider = {
    active: false,
    items: ['Genre', 'Type', 'Year', 'Place', 'Author', 'Pages', 'Color'],
    current: 0
  };

  emitter.on('select-nextItem', () => {
    state.machineslider.current++;
    if (state.machineslider.current >= state.machineslider.items.length) {
      state.machineslider.current = 0;
    }

    emitter.emit('render');
  });

  emitter.on('select-prevItem', () => {
    state.machineslider.current--;
    if (state.machineslider.current < 0) {
      state.machineslider.current = state.machineslider.items.length;
    }

    emitter.emit('render');
  });

  emitter.on('select-add', () => {
    emitter.emit('render');
  });
}
