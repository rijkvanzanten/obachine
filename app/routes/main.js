import html from 'choo/html';
import header from '../components/header';
import machineslider from '../components/machineslider';
import styles from './body.css';

export default function main(state, emit) {
  return html`
    <body class=${styles.body}>
      ${header(state, emit)}
      ${machineslider(state.machineslider, emit)}
    </body>
  `;
}
