import html from 'choo/html';
import header from '../components/header';
import bodyStyles from './body.css';

export default function main(state, emit) {
  return html`
    <body class=${bodyStyles.body}>
      ${header(state, emit)}
      <h1>${state.store[state.params.id].titles['short-title']}</h1>

    </body>
  `;
}
