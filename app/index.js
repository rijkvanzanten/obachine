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
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="43" height="32" viewBox="0 0 43 32"><defs><rect id="a" width="36.976" height="26.066" rx="6"/></defs><g fill="none" fill-rule="evenodd"><rect width="43" height="32" fill="#4A4A4A" rx="10"/><g transform="translate(3.116 2.967)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><use fill="#D8D8D8" xlink:href="#a"/><g mask="url(#b)"><path fill="#E30111" d="M0 0h9.348v27.762H0z"/><path fill="#86138A" d="M9.348 0h9.348v27.762H9.348z"/><path fill="#FFF" d="M18.696 0h9.348v27.762h-9.348z"/><path fill="#12C047" d="M27.836 0h9.348v27.762h-9.348z"/></g></g></g></svg>'
      },
      {
        title: 'Type',
        machine: 'type'
      },
      {
        title: 'Language',
        machine: 'language'
      },
      {
        title: 'Pages',
        machine: 'pages'
      },
      {
        title: 'Auteur',
        machine: 'auteur'
      },
      {
        title: 'Components',
        machine: 'components'
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
