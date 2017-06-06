import choo from 'choo';

import main from './routes/main';

const app = choo();

app.use(setupState);

app.route('/', main);

app.mount('body');

function setupState(state, emitter) {
  state.machineslider = {
    active: false,
    items: ['genre', 'type', 'year', 'place', 'author', 'pages', 'color'],
    current: 0
  };

  state.machineparts = [];

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

  emitter.on('select-add', item => {
    state.machineparts.push({
      type: item,
      value: ''
    });

    emitter.emit('render');
  });
}
