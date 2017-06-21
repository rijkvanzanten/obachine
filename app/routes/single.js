import html from 'choo/html';
import header from '../components/header';
import singleStyles from './single.css';
import {toArray, getValue} from '../utils';

export default function main(state, emit) {
  const genres = toArray(getValue(state, 'store', state.params.id, 'genres', 'genre'));
  const formats = toArray(getValue(state, 'store', state.params.id, 'formats', 'format'));
  const summaries = toArray(getValue(state, 'store', state.params.id, 'summaries', 'summary'));
  const specifications = toArray(getValue(state, 'store', state.params.id, 'description', 'physical-description'));
  const editions = toArray(getValue(state, 'store', state.params.id, 'publication', 'editions', 'edition'));

  return html`
    <body class=${singleStyles.body}>
      ${header(state, emit)}
      <main>
        <a href="/">◀ terug</a>
        <section class=${singleStyles.header}>
          <h2>${state.store[state.params.id].titles['short-title']}</h2>
          <img class=${singleStyles.cover} src=${state.store[state.params.id].coverimages.coverimage[1]} />
        </section>
        <section class=${singleStyles.summary}>
          <h3>Korte beschrijving</h3>
          <p>${summaries}</p>
        </section>
        ${genres.length > 0 ? renderList('Genres', genres) : null}
        ${specifications.length > 0 ? renderList('Specifications', specifications) : null}
        ${formats.length > 0 ? renderList('Formats', formats) : null}
        ${editions.length > 0 ? renderList('Editions', editions) : null}
      </main>
    </body>
  `;

  function renderList(title, values) {
    return html`
      <div>
        <h3>${title}</h3>
        <ul>${values.map(value => renderLI(value))}</ul>
      </div>
    `;

    function renderLI(value) {
      return html`<li>${value}</li>`;
    }
  }

}
