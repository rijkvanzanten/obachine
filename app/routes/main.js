import html from 'choo/html';
import axios from 'axios';
import parts from '../components/parts';
import header from '../components/header';
import machineslider from '../components/machineslider';
import modal from '../components/settings-modal';
import startTunnel from '../components/parts/tunnels/start-tunnel.svg';
import endTunnel from '../components/parts/tunnels/end-tunnel.svg';
import styles from './main.css';
import bodyStyles from './body.css';
import resultsStyle from './results.css';

export default function main(state, emit) {
  const {active} = state.modal;

  return html`
    <body class=${bodyStyles.body}>
      ${header(state, emit)}
      ${machineslider(state.machineslider, emit)}
      <form onsubmit=${submitForm} class=${styles.machineform}>
        <img class=${styles.tunnel} src=${startTunnel}/>
        <ul class=${styles.machine_ul}>
          ${Object.keys(state.machineparts).length > 0 ? Object.keys(state.machineparts).map(machine) : html`
            <div class=${styles.placeholder}>Stel je machine samen...</div>
          `}
        </ul>
        <img class=${styles.tunnel} src=${endTunnel}/>
        <button class=${styles.button} type="submit">Machine Aanzwengelen</button>
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

  function machine(id) {
    const {type, value} = state.machineparts[id];

    return html`
      <li data-id=${id} onclick=${showModal}>
        <input type="hidden" name=${type} value=${value || ''}/>
        ${parts[type].machine()}
      </li>
    `;

    function showModal() {
      emit('showModal', {
        id,
        content: parts[type].modal,
        value, // Current value of machine
      });
    }
  }

  function submitForm(e) {

    const searchQuery = {};

    e.target.querySelectorAll('input').forEach(input => {
      searchQuery[input.name] = input.value;
    });

    const resultsContainer = document.querySelector('#results-container');
    console.log(resultsContainer);

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
