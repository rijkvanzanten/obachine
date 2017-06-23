import html from 'choo/html';
import styles from './modal.css';

import buttonAnimation from '../buttonAnimation.css';

export default ({machineparts, modal: {content: {id, content, value}}}, emit) => {
  const {title, children, color} = content;

  return html`
    <div class=${styles.wrapper}>
      <div class=${styles.overlay} onclick=${close}></div>
      <div class=${styles.modal} style="background-color: ${color}">
        <h2 class="${styles.title}">${title}</h2>
        ${children(id, value, emit)}
        <button class=${styles.button + ' ' + buttonAnimation.hoverEffect} onclick=${close}>Opslaan</button>
      </div>
    </div>
  `;

  function close({target}) {
    if (machineparts[id].value !== undefined) {
      return emit('hideModal', id);
    }

    target.classList.add(styles.deny);

    setTimeout(() => target.classList.remove(styles.deny), 1000);
  }
};
