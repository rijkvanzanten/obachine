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
    window.scrollTo(0, 0);
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
      <body>
        ${header(state, emit)}
        <main class=${styles.main}>
          <a class="${styles.back}" href="/"><img src="${backArrow}"><span>terug</span></a>
          <section class=${styles.header}>
            <h2>${title}</h2>
            ${imageSrc.startsWith('https://v19.nbc.bibliotheek.nl') ?
              html`<img class=${styles.cover} src="${imageSrc}" />` :  html`<p>Geen afbeelding beschikbaar</p>`
            }
            <p>${specifications}</p>
          </section>
          <section class=${styles.summary}>
            <h3>Korte beschrijving</h3>
            <p>${summaries}</p>
          </section>
          ${renderAvailability(availability)}
          ${formats.length > 0 ? renderList('Formats', formats) : null}
          ${genres.length > 0 ? renderList('Genres', genres) : null}
          ${renderReviews(reviews)}
        </main>
      </body>
    `;

    function renderList(title, values) {
      return html`
        <section>
          <h3>${title}</h3>
          <ul>${values.map(value => renderLI(value))}</ul>
        </section>
      `;

      function renderLI(value) {
        return html`<li><p>${value}</p></li>`;
      }
    }

    function renderAvailability(availability) {
      if (availability && availability.length > 0) {
        return html`
          <section class="${styles.availability}">
            <h3>Beschikbaarheid</h3>
            <details>
              <summary>Klik hier om de beschikbaarheid te bekijken</summary>
              <ul>${availability.map(({name, available}) => html`<li class="${styles.location}" data-available="${available}">${name}</li>`)}</ul>
            </details>
          </section>
        `;
      }

      return null;
    }

    function renderReviews(reviews) {
      if (reviews && reviews.length > 0) {
        return html`
          <section class="${styles.reviews}">
            <h3>Reviews <small>van Boekenliefde.nl</small></h3>
            <ul>
              ${reviews.map(({link, username, dateadded, ratingtitle, rating, review}) => html`
                <li>
                  <a href="${link}"><p class=${styles.reviewname}><span>${username}</span><span> ${dateadded}</span></p></a>
                  <p><em>"${ratingtitle}" <span class=${styles.rating}>Cijfer: ${rating}</span></em></p>
                  <details>
                    <summary>Lees de review</summary>
                    <p>${review}</p>
                  </details>
                </li>
              `)}
            </ul>
          </section>
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
