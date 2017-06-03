import choo from 'choo';

import main from './routes/main';

const app = choo();

app.route('/', main);

app.mount('body');

function setupState(state, emitter) {
  // Default state
  state.slider = {
    active: false,
    title: 'Kies het thema waar je boek over moet gaan!',
    img: ''
  };

  emitter.on('next', () => {
    state.modal.active = false;
    emitter.emit('render');
  });

  emitter.on('prev', () => {
    state.modal.active = true;
    emitter.emit('render');
  });

  // Emitter.on('updateModal', data => {
  //   state.modal.title = data.title;
  //   state.modal.content = data.content;
  //   emitter.emit('render');
  // });
}

console.log(setupState);
