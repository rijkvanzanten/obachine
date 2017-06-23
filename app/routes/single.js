import html from 'choo/html';
import header from '../components/header';
import styles from './single.css';
import backArrow from './back-arrow.svg';
import {toArray, getValue} from '../utils';

export default function single(state, emit) {
  const itemID = state.params.id;
  const item = getValue(state, 'store', itemID);

  if (Object.keys(item).length === 0) {
    emit('getItem', itemID);
    return renderLoader();
  }

  return renderPage(item);

  function renderPage(item) {
    const title = getValue(item, 'titles', 'short-title');
    const imageSrc = getValue(item, 'coverimages', 'coverimage')[1];
    const genres = toArray(getValue(item, 'genres', 'genre'));
    const formats = toArray(getValue(item, 'formats', 'format'));
    const summaries = toArray(getValue(item, 'summaries', 'summary'));
    const specifications = toArray(getValue(item, 'description', 'physical-description'));

    const availability = item.availability;

    if (!availability) {
      emit('getAvailability', itemID);
    }

    return html`
      <body class=${styles.body}>
        ${header(state, emit)}
        <main>
          <a href="/"><img src="${backArrow}">terug</a>
          <section class=${styles.header}>
            <h2>${title}</h2>
            <img class=${styles.cover} src=${imageSrc} />
          </section>
          <section class=${styles.summary}>
            <h3>Korte beschrijving</h3>
            <p>${summaries}</p>
          </section>
          ${genres.length > 0 ? renderList('Genres', genres) : null}
          ${specifications.length > 0 ? renderList('Specifications', specifications) : null}
          ${formats.length > 0 ? renderList('Formats', formats) : null}
          ${renderAvailability(availability)}
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

    function renderAvailability(availability) {
      if (availability && availability.length > 0) {
        return html`
          <div>
            <h3>Beschikbaarheid</h3>
            <ul>
              ${availability.map(({name, available}) => html`<li class="${styles.location}" data-available="${available}">${name}</li>`)}
            </ul>
          </div>
        `;
      }

      return null;
    }
  }

  function renderLoader() {
    return html`
      <body class=${styles.body}>
        ${header(state, emit)}
        <main>
          <div class="${styles.loader}">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </main>
      </body>
    `;
  }
}
