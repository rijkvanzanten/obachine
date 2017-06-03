import choo from 'choo';

import main from './routes/main';

const app = choo();

app.use(setupState);

app.route('/', main);

app.mount('body');

function setupState(state, emitter) {
  // Default state
  state.machineslider = {
    active: false,
    title: [
      'Genre', 'Type', 'Year', 'Place', 'Author', 'Pages', 'Color'
    ],
    number: 0,
    activeItem: ''
  };

  state.machineslider.activeItem = state.machineslider.title[0];

  let count = state.machineslider.number;

  emitter.on('next', () => {
    if (count >= 0 && count < (state.machineslider.title.length - 1)) {
      count++;
      state.machineslider.activeItem = state.machineslider.title[count];
      emitter.emit('render');
    } else {
      state.machineslider.activeItem = state.machineslider.title[count];
      emitter.emit('render');
    }
  });

  emitter.on('prev', () => {
    console.log('prev');
    if (count > 0) {
      count--;
      state.machineslider.activeItem = state.machineslider.title[count];
      emitter.emit('render');
    } else {
      state.machineslider.activeItem = state.machineslider.title[count];
      emitter.emit('render');
    }
  });

  emitter.on('select', () => {
    console.log('select');
  });
}

console.log(setupState);
