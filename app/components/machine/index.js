import html from 'choo/html';
import removeButton from './cross.svg';
import parts from '../parts';
import startTunnel from '../parts/tunnels/start-tunnel.svg';
import endTunnel from '../parts/tunnels/end-tunnel.svg';
import styles from './styles.css';

export default (state, emit) => {
  const {machineparts} = state;
  const machinepartsIDs = Object.keys(machineparts);
  const showEmptyState = machinepartsIDs.length === 0;

  return html`
    <div class=${styles.wrapper}>
      <img class=${styles.tunnel} src=${startTunnel}/>
      <ul class=${styles.machine}>
        ${showEmptyState ? emptyState() : machinepartsIDs.map(machine)}
      </ul>
      <img class=${styles.tunnel} src=${endTunnel}/>
    </div>
  `;

  function emptyState() {
    return html`<div class=${styles.placeholder}>Stel je machine samen..</div>`;
  }

  function machine(id) {
    const {type, value} = machineparts[id];

    return html`
      <li data-id=${id} >
        <button onclick=${removeMachine}>
          <img src=${removeButton} alt="Remove machine" />
        </button>
        <div onclick=${showModal}>
          ${parts[type].machine(state, emit, id)}
        </div>
      </li>
    `;

    function showModal() {
      emit('showModal', {
        id,
        content: parts[type].modal,
        value, // Current value of machine
      });
    }

    function removeMachine() {
      emit('removeMachine', {id});
    }
  }
};
