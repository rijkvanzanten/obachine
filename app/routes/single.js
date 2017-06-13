import html from 'choo/html';
import header from '../components/header';
import singleStyles from './single.css';

function toArray(value) {
  let array = [];

  if (value) {
    if (Array.isArray(value)) {
      array = value;
    } else {
      array = [value];
    }
  }

  return array;
}

export default function main(state, emit) {
  const genres = toArray(state.store[state.params.id].genres.genre);
  const formats = toArray(state.store[state.params.id].formats.format);

  return html`
    <body class=${singleStyles.body}>
      ${header(state, emit)}
      <main>
        <a href="/">◀</a>
        <h2>${state.store[state.params.id].titles['short-title']}</h2>
        <div>
          ${formats.length > 0 ?
            formats.map(format => html`<li>${format}</li>`) :
            null
          }
        </div>
        <div>${state.store[state.params.id].summaries.summary}</div>
        <img src=${state.store[state.params.id].coverimages.coverimage[1]} />
        <ul>${genres.map(genre => html`<li>${genre}</li>`)}</ul>
      </main>
    </body>
  `;

}
