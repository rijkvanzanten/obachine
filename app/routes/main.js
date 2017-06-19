import html from 'choo/html';
import header from '../components/header';
import machineslider from '../components/machineslider';
import machineForm from '../components/machineForm';
import modal from '../components/settings-modal';
import bodyStyles from './body.css';
import machine from '../components/machine';
import results from '../components/results';

export default function main(state, emit) {
  const {active} = state.modal;

  return html`
    <body class=${bodyStyles.body}>
      ${header(state, emit)}
      ${machineslider(state, emit)}
      ${machine(state, emit)}
      ${machineForm(state, emit)}
      ${active ? modal(state.modal.content, emit) : null}
      ${results(state, emit)}
    </body>
  `;
}
