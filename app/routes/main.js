import html from 'choo/html';
import axios from 'axios';
import header from '../components/header';
import machineslider from '../components/machineslider';
import modal from '../components/settings-modal';
import styles from './main.css';
import bodyStyles from './body.css';
import resultsStyle from './results.css';
import machine from '../components/machine';

export default function main(state, emit) {
  const {active} = state.modal;

  return html`
    <body class=${bodyStyles.body}>
      ${header(state, emit)}
      ${machineslider(state, emit)}
      ${machine(state, emit)}
      <form onsubmit=${submitForm} class=${styles.machineform}>
        ${Object.keys(state.machineparts).map(id => html`
          <input type="hidden" name=${state.machineparts[id].type} value=${state.machineparts[id].value || ''}/>
        `)}
        <button class=${styles.button} type="submit">Start de Machine</button>
      </form>
      ${active ? modal(state.modal.content, emit) : null}
      <div id="results-container">
        <ul class=${resultsStyle.list}>
        ${state.results.map(item => html`
          <a href="/item/${item.id.nativeid}">
            <li>
              <span>${item.titles['short-title']}</span>
              <img src="${item.coverimages.coverimage[1]}" />
            </li>
          </a>
        `)}
        </ul>
      </div>
    </body>
  `;

  function submitForm(e) {
    const searchQuery = {};

    e.target.querySelectorAll('input').forEach(input => {
      searchQuery[input.name] = input.value;
    });

    const resultsContainer = document.querySelector('#results-container');

    axios.get('/api/search', {params: searchQuery})
      .then(res => {

        resultsContainer.innerHTML = '';

        const results = res.data.aquabrowser.results.result;

        emit('results', results);
      })
      .catch(err => console.error(err));

    e.preventDefault();
    return false;
  }
}
