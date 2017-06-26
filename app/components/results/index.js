import html from 'choo/html';
import styles from './styles.css';
import {getValue} from '../../utils';

export default state => {
  const {results} = state;
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
            ${console.log(imageSrc)}
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
