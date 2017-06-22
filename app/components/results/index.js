import html from 'choo/html';
import styles from './styles.css';
import {getValue} from '../../utils';

export default state => {
  const {results} = state;
  return html`
    <ul class=${styles.list}>
      ${results.map(renderResult)}
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
          <img class=${styles.cover} src="${imageSrc}" />
          ${description ?
            html`<li>${description}</li>` : ''
          }
        </a>
      </li>
    `;
  }
};
