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

  function getValue(object, ...keys) {
    keys.forEach(key => {
      if (object[key]) {
        object = object[key];
      } else {
        console.log('Key ' + key + ' bestaat niet op object');
        return false;
      }
    });

    return object;
  }

  const titles = getValue(state, 'store', state.params.id, 'titles', 'short-title') ? getValue(state, 'store', state.params.id, 'titles', 'short-title') : 'Onbekend';
  const coverimages = getValue(state, 'store', state.params.id, 'coverimages', 'coverimage') ? getValue(state, 'store', state.params.id, 'coverimages', 'coverimage') : 'Onbekend';
  const summaries = getValue(state, 'store', state.params.id, 'summaries', 'summary') ? getValue(state, 'store', state.params.id, 'summaries', 'summary') : 'Onbekend';
  const specifications = getValue(state, 'store', state.params.id, 'description', 'physical-description') ? getValue(state, 'store', state.params.id, 'description', 'physical-description') : 'Onbekend';
  const editions = getValue(state, 'store', state.params.id, 'publication', 'editions', 'edition');

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
        <h3>Genres</h3>
        <ul>${genres.map(genre => html`<li>${genre}</li>`)}</ul>
        <h3>Specificaties</h3>
        <p>${specifications}</p>
        <h3>Beschikbare formaten</h3>
        <ul>
          ${formats.length > 0 ?
            formats.map(format => html`<li>${format}</li>`) :
            null
          }
        </ul>
        ${editions.length > 0 ? html`
          <h3>Editie</h3>
          <p>${editions}</p>
        ` : null
        }
      </main>
    </body>
  `;

}
