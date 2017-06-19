import choo from 'choo';
import shortid from 'shortid';
import parts from './components/parts';

import main from './routes/main';

import single from './routes/single';

const app = choo();

app.use(setupState);

app.route('/', main);

app.route('/item/:id', single);

app.mount('body');

function setupState(state, emitter) {
  Object.assign(state, {
    machineslider: {
      active: false,
      items: ['author', 'genre', 'type', 'hardsort', 'keyword', 'location'],
      current: 0,
    },
    machineparts: {
    /*
     * [id]: {
     *   type: String,
     *   value: String,
     *   order: Number
     * }
     */
    },
    modal: {
      active: false,
      content: {},
      id: '', // ID of machine
    },
    results: [],
    store: {},
  });

  emitter.on('select-nextItem', onSelectNextItem);
  emitter.on('select-prevItem', onSelectPrevItem);
  emitter.on('select-add', onSelectAdd);

  emitter.on('showModal', showModal);
  emitter.on('hideModal', hideModal);

  emitter.on('updateValue', updateValue);

  emitter.on('results', setResults);

  function onSelectNextItem() {
    state.machineslider.current++;
    if (state.machineslider.current >= state.machineslider.items.length) {
      state.machineslider.current = 0;
    }

    emitter.emit('render');
  }

  function onSelectPrevItem() {
    state.machineslider.current--;
    if (state.machineslider.current < 0) {
      state.machineslider.current = state.machineslider.items.length;
    }

    emitter.emit('render');
  }

  function onSelectAdd(type) {
    const id = shortid.generate();

    state.machineparts[id] = {
      type,
      value: '',
      order: Object.keys(state.machineparts).length,
    };

    emitter.emit('showModal', {
      id,
      content: parts[type].modal,
    });
  }

  function showModal(modalContent) {
    state.modal.content = modalContent;
    state.modal.active = true;

    emitter.emit('render');
  }

  function hideModal() {
    state.modal.active = false;
    emitter.emit('render');
  }

  function updateValue({id, value}) {
    state.machineparts[id].value = value;
  }

  function setResults(results) {
    state.results = results;

    results.forEach(result => state.store[result.id.nativeid] = result);
    emitter.emit('render');
  }
}
