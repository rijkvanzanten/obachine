import html from 'choo/html';
import styles from './modal.css';

// Export module
// Create html template
export default (state, emit) => {
  return html`
    <div class=${styles.modal} style="background-color:${state.modal.color}">
      <button class=${styles.close} onclick=${close}>✕</button>
      <h2>${state.modal.title}</h2>
      <p>${state.modal.content}</p>
    </div>
  `;

  function close() {
    emit('closeModal');
  }
};
