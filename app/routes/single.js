import html from 'choo/html';
import header from '../components/header';
import styles from './single.css';
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
    const reviews = item.reviews;
    const isbn = getValue(item, 'identifiers', 'isbn-id');

    if (!availability) {
      emit('getAvailability', itemID);
    }

    if (!reviews) {
      emit('getReviews', {itemID, isbn});
    }

    return html`
      <body class=${styles.body}>
        ${header(state, emit)}
        <main>
          <a href="/">◀ terug</a>
          <section class=${styles.header}>
            <h2>${title}</h2>
            <img class=${styles.cover} src=${imageSrc} />
          </section>
          <section class=${styles.summary}>
            <h3>Korte beschrijving</h3>
            <p>${summaries}</p>
          </section>
          ${renderAvailability(availability)}
          ${renderReviews(reviews)}
          ${formats.length > 0 ? renderList('Formats', formats) : null}
          ${genres.length > 0 ? renderList('Genres', genres) : null}
          ${specifications.length > 0 ? renderList('Specifications', specifications) : null}
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
        return html`<li><p>${value}</p></li>`;
      }
    }

    function renderAvailability(availability) {
      if (availability && availability.length > 0) {
        return html`
          <div>
            <h3>Beschikbaarheid</h3>
            <details>
              <summary>Klik hier om de beschikbaarheid te bekijken</summary>
              <ul>${availability.map(({name, available}) => html`<li class="${styles.location}" data-available="${available}">${name}</li>`)}</ul>
            </details>
          </div>
        `;
      }

      return null;
    }

    function renderReviews(reviews) {
      if (reviews && reviews.length > 0) {
        return html`
          <div>
            <h3>Reviews <small>van Boekenliefde.nl</small></h3>
            <ul>
              ${reviews.map(({link, username, dateadded, ratingtitle, rating, review}) => html`
                <li>
                  <a href="${link}"><p>${username} - ${dateadded}</p></a>
                  <p>${ratingtitle} - ${rating}</p>
                  <details>
                    <summary>Klik hier om de review te lezen</summary>
                    <p>${review}</p>
                  </details>
                </li>
              `)}
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
