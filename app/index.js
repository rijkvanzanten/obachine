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
    item: [
      {
        title: 'Genre',
        machine: 'genre',
        svg: 'machine-1.svg'
      },
      {
        title: 'Type',
        machine: 'genre'
      },
      {
        title: 'Language',
        machine: 'genre'
      },
      {
        title: 'Pages',
        machine: 'genre'
      },
      {
        title: 'Auteur',
        machine: 'genre'
      },
      {
        title: 'Components',
        machine: 'genre'
      }
    ],
    number: 0,
    activeItem: ''
  };

  state.machineslider.activeItem = state.machineslider.item[0];

  let count = state.machineslider.number;

  emitter.on('next', () => {
    if (count >= 0 && count < (state.machineslider.item.length - 1)) {
      count++;
      state.machineslider.activeItem = state.machineslider.item[count];
      console.log(state.machineslider.activeItem);
      emitter.emit('render');
    } else {
      state.machineslider.activeItem = state.machineslider.item[count];
      emitter.emit('render');
    }
  });

  emitter.on('prev', () => {
    console.log('prev');
    if (count > 0) {
      count--;
      state.machineslider.activeItem = state.machineslider.item[count];
      emitter.emit('render');
    } else {
      state.machineslider.activeItem = state.machineslider.item[count];
      emitter.emit('render');
    }
  });

  emitter.on('select', () => {
    console.log(state.machineslider.activeItem);
    console.log(state.machineslider.activeItem.svg);
    emitter.emit('render');
  });
}

console.log(setupState);
