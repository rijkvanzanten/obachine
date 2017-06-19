import html from 'choo/html';
import styles from './modal.css';

export default ({id, content, value}, emit) => {
  const {title, children, color} = content;

  return html`
    <div class=${styles.overlay}>
      <div class=${styles.modal} style="background-color: ${color}">
        <h2 class="${styles.title}">${title}</h2>
        ${children(id, value, emit)}
        <button class=${styles.button} onclick=${close}>Opslaan</button>
      </div>
    </div>
  `;

  function close() {
    emit('hideModal');
  }
};
