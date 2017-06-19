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
        <a href="/">◀ terug</a>
        <section class=${singleStyles.header}>
          <h2>${state.store[state.params.id].titles['short-title']}</h2>
          <img src=${state.store[state.params.id].coverimages.coverimage[1]} />
        </section>
        <section class=${singleStyles.summary}>
          <h3>Korte beschrijving</h3>
          <p>${state.store[state.params.id].summaries.summary}</p>
        </section>
        <h3>Genres</h3>
        <ul>${genres.map(genre => html`<li>${genre}</li>`)}</ul>
        <h3>Fysieke beschrijving</h3>
        <p>${state.store[state.params.id].description['physical-description']}</p>
        <h3>Beschikbare formaten</h3>
        <ul>
          ${formats.length > 0 ?
            formats.map(format => html`<li>${format}</li>`) :
            null
          }
        </ul>
      </main>
    </body>
  `;

}
