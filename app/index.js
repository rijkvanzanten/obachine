import choo from 'choo';

import main from './routes/main';

const app = choo();

app.use(setupState);

app.route('/', main);

app.mount('body');

function setupState(state, emitter) {
  // Default state
  state.modal = {
    active: true,
    title: 'Kies het thema waar je boek over moet gaan!',
    content: 'Op deze applicatie kan je een eigen zoekmachine in elkaar zetten om zo altijd de juiste content te vinden waar jij naar zoekt.'
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
