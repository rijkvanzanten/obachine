import html from 'choo/html';
import parts from '../components/parts';
import header from '../components/header';
import machineslider from '../components/machineslider';
import modal from '../components/settings-modal';
import styles from './body.css';

export default function main(state, emit) {
  const {active} = state.modal;

  return html`
    <body class=${styles.body}>
      ${header(state, emit)}
      ${machineslider(state.machineslider, emit)}
      <form>
        <ul>
          ${Object.keys(state.machineparts).map(machine)}
        </ul>
        <button type="submit">Machine Aanzwengelen</button>
      </form>
      ${active ? modal(state.modal.content, emit) : null}
    </body>
  `;

  function machine(id) {
    const {type, value} = state.machineparts[id];

    function showModal() {
      emit('showModal', {
        id,
        content: parts[type].modal
      });
    }

    return html`
      <li data-id=${id} onclick=${showModal}>
        <input type="hidden" name=${type} value=${value || ''}/>
        ${parts[type].machine()}
      </li>
    `;
  }
}

