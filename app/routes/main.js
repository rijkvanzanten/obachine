import html from 'choo/html';
import header from '../components/header';
import footer from '../components/footer';
import machineslider from '../components/machineslider';
import machine from '../components/machine';
import button from '../components/button';
import modal from '../components/modal';
import styles from './body.css';

export default function main(state, emit) {
  return html`
    <body class=${styles.body}>
      ${header(state, emit)}
      ${machineslider(state, emit)}
      ${machine()}
      ${button()}
      ${state.modal.active ? modal(state, emit) : null}
      ${footer()}
    </body>
  `;
}
