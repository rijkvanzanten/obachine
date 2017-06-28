import html from 'choo/html';
import throttle from 'throttle-debounce/throttle';
import styles from './styles.css';
import {getValue} from '../../utils';

export default (state, emit) => {
  const {results, searchQuery} = state;

  // Add eventListener for scroll (infinite scrolling)
  window.addEventListener('scroll', throttle(150, function() {
    const thresholdPassed = document.body.clientHeight - (window.scrollY + window.innerHeight) < 500;
    if (thresholdPassed && state.isFetching === false && results.length > 0 && Object.keys(searchQuery).length > 0) {
      searchQuery.page++;
      emit('fetchResults', searchQuery);
    }
  }));

  return html`
    <ul class=${styles.list}>
    ${results ?
        results.length > 0 ?
          results.map(renderResult) :
          html`<p class=${styles.noresults}>Helaas hebben we geen resultaten gevonden. Probeer je zoekmachine aan te passen!</p>` :
        null
      }
    </ul>
  `;

  function renderResult(item) {
    const itemID = getValue(item, 'id', 'nativeid');
    const title = getValue(item, 'titles', 'short-title');
    const imageSrc = getValue(item, 'coverimages', 'coverimage')[1];
    const description = getValue(item, 'description', 'physical-description');
    return html`
      <li>
        <a href="/item/${itemID}">
          <span>${title}</span>
          ${imageSrc.startsWith('https://v19.nbc.bibliotheek.nl') ?
            html`<img class=${styles.cover} src="${imageSrc}" />` :  html`<p>Geen afbeelding beschikbaar</p>`
          }
          ${description ?
            html`<li>${description}</li>` : ''
          }
        </a>
      </li>
    `;
  }
};
