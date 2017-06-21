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
      items: ['genre', 'type', 'keyword', 'location', 'author', 'hardsort'],
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

  emitter.on('removeMachine', removeMachine);

  emitter.on('startAnimation', startAnimation);
  emitter.on('startAnimationAll', startAnimationAll);
  emitter.on('stopAnimation', stopAnimation);
  emitter.on('stopAnimationAll', stopAnimationAll);

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
      state.machineslider.current = state.machineslider.items.length - 1;
    }

    emitter.emit('render');
  }

  function onSelectAdd(type) {
    const id = shortid.generate();

    state.machineparts[id] = {
      type,
      value: '',
      order: Object.keys(state.machineparts).length,
      animating: false,
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

  function hideModal(id) {
    state.modal.active = false;
    emitter.emit('startAnimation', id);

    setTimeout(() => emitter.emit('stopAnimation', id), 1000);
  }

  function updateValue({id, value}) {
    state.machineparts[id].value = value;
  }

  function setResults(results) {
    state.results = results;

    results.forEach(result => state.store[result.id.nativeid] = result);
    emitter.emit('render');
  }

  function removeMachine({id}) {
    delete state.machineparts[id];
    emitter.emit('render');
  }

  function startAnimation(id) {
    if (state.machineparts[id]) {
      state.machineparts[id].animating = true;
      emitter.emit('render');
    }
  }

  function startAnimationAll() {
    Object.keys(state.machineparts).forEach(id => {
      state.machineparts[id].animating = true;
      emitter.emit('render');
    });
  }

  function stopAnimation(id) {
    if (state.machineparts[id]) {
      state.machineparts[id].animating = false;
      emitter.emit('render');
    }
  }

  function stopAnimationAll() {
    Object.keys(state.machineparts).forEach(id => {
      state.machineparts[id].animating = false;
      emitter.emit('render');
    });
  }
}
