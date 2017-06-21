import html from 'choo/html';
import axios from 'axios';
import styles from './styles.css';
import {getValue, toArray} from '../../utils';

export default (state, emit) => {
  const {machineparts} = state;
  const machinepartsIDs = Object.keys(machineparts);

  if (machinepartsIDs.length > 0) {
    return html`
      <form onsubmit=${submitForm} class=${styles.machineform}>
        ${machinepartsIDs.map(renderInput)}
        <button type="submit">Start de Machine</button>
      </form>
    `;
  } else {
    return null;
  }

  function submitForm(e) {
    const searchQuery = {};

    e.target.querySelectorAll('input').forEach(input => {
      searchQuery[input.name] = input.value;
    });

    axios.get('/api/search', {params: searchQuery})
      .then(res => {
        const results = toArray(getValue(res, 'data', 'aquabrowser', 'results', 'result'));
        emit('results', results);
      })
      .catch(err => console.error(err));

    e.preventDefault();
    return false;
  }

  function renderInput(id) {
    return html`
      <input type="hidden" name=${state.machineparts[id].type} value=${state.machineparts[id].value || ''}/>
    `;
  }
};
