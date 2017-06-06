import html from 'choo/html';
import parts from '../components/parts';
import header from '../components/header';
import machineslider from '../components/machineslider';
import styles from './body.css';

export default function main(state, emit) {
  return html`
    <body class=${styles.body}>
      ${header(state, emit)}
      ${machineslider(state.machineslider, emit)}
      <form>
        <ul>
          ${state.machineparts.map(machine)}
        </ul>
        <button type="submit">Machine Aanzwengelen</button>
      </form>
    </body>
  `;

  function machine({type}) {
    return html`
      <li>
        <input type="hidden" name=${type} />
        ${parts[type]()}
      </li>
    `;
  }
}

