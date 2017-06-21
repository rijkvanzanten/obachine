import html from 'choo/html';
import styles from './styles.css';

export default state => {
  const {results} = state;
  return html`
    <ul class=${styles.list}>
      ${results.map(renderResult)}
    </ul>
  `;

  function renderResult(item) {
    return html`
      <li>
        <a href="/item/${item.id.nativeid}">
          <span>${item.titles['short-title']}</span>
          <img src="${item.coverimages.coverimage[1]}" />
          ${item.description['physical-description'] ?
            html`<li>${item.description['physical-description']}</li>` : ''
          }
        </a>
      </li>
    `;
  }
};
