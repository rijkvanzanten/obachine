import choo from 'choo';
import shortid from 'shortid';
import axios from 'axios';
import {toArray, getValue} from './utils';
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
      items: ['genre', 'type', 'keyword', 'language', 'author', 'hardsort', 'location'],
      names: ['genre', 'type', 'trefwoord', 'taal', 'auteur', 'sorteer', 'locatie'],
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
    results: false,
    store: {}, // all results ever
    searchQuery: {},
    isFetching: false,
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

  emitter.on('fetchResults', fetchResults);
  emitter.on('getItem', getItem);
  emitter.on('getAvailability', getAvailability);
  emitter.on('getReviews', getReviews);

  emitter.on('highlightSlider', highlightSlider);

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
    // Filter out all items without an ID
    results = results.filter(result => result.id && result.id.nativeid);

    // Add results to existing (infinite scroll), but don't when it's the first page (new machine)
    state.results = state.searchQuery.page === 1 ? results : state.results.length > 0 ? [...state.results, ...results] : results;

    results.forEach(result => {
      const itemID = getValue(result, 'id', 'nativeid');
      if (itemID) {
        state.store[itemID] = result;
      }
    });
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

  function fetchResults(searchQuery) {
    emitter.emit('startAnimationAll');

    // Reset RCTX for new machines
    if (searchQuery.page ===  1) {
      searchQuery.rctx = null;
    }

    state.searchQuery = searchQuery;
    state.isFetching = true;

    axios.get('/api/search', {params: searchQuery})
      .then(res => {
        const results = toArray(getValue(res, 'data', 'aquabrowser', 'results', 'result'));
        state.isFetching = false;

        // Save RCTX string for follow-up requests
        const rctx = getValue(res, 'data', 'aquabrowser', 'meta', 'rctx');
        if (rctx.length > 0) {
          state.searchQuery.rctx = rctx;
        }

        emitter.emit('stopAnimationAll');
        emitter.emit('results', results);
      })
      .catch(err => console.error(err));
  }

  function getItem(id) {
    axios.get(`/api/details?id=|oba-catalogus|${id}`)
      .then(res => {
        state.store[id] = getValue(res, 'data', 'aquabrowser');
        emitter.emit('render');
      })
      .catch(err => console.error(err));
  }

  function getAvailability(id) {
    axios.get(`/api/availability?id=|oba-catalogus|${id}`)
      .then(res => {
        const locations = getValue(res, 'data', 'aquabrowser', 'locations', 'location');
        if (locations && locations.length > 0) {
          state.store[id].availability = locations.map(({name, available}) => ({name, available}));
          emitter.emit('render');
        }
      })
      .catch(err => console.error(err));
  }

  function getReviews({itemID: id, isbn}) {
    axios.get('/api/reviews?isbn=' + isbn)
    .then(({data: reviews}) => {
      if (reviews && reviews.length > 0) {
        state.store[id].reviews = reviews;
        emitter.emit('render');
      }
    })
    .catch(err => console.error(err));
  }

  function highlightSlider() {
    state.highlightSlider = false;
    emitter.emit('render');

    setTimeout(function() {
      state.highlightSlider = true;
      emitter.emit('render');
    }, 1);
  }
}
