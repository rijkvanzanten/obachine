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
      'Genre', 'Type', 'Year', 'Place', 'Author', 'Pages', 'Color'
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

  state.modal = {
    active: false,
    title: 'Kies het thema waar je boek over moet gaan!',
    content: 'Op deze applicatie kan je een eigen zoekmachine in elkaar zetten om zo altijd de juiste content te vinden waar jij naar zoekt.',
    color: '#18a9e0'
  };

  emitter.on('closeModal', () => {
    state.modal.active = false;
    emitter.emit('render');
  });

  emitter.on('openModal', () => {
    state.modal.active = true;
    emitter.emit('render');
  });

  emitter.on('updateModal', data => {
    state.modal.title = data.title;
    state.modal.content = data.content;
    emitter.emit('render');
  });
}
