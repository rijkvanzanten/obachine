import html from 'choo/html';
import styles from './header.css';
import logo from './oba-logo.svg';

// Export module
export default (state, emit) => {// Create html template
  return html`
    <header class=${styles.header} onclick=${openModal}>
      <img src="${logo}">
    </header>
  `;

  function openModal() {
    emit('updateModal', {
      title: 'Hoi!',
      content: 'Hier moet je het mee doen.'
    });
    emit('openModal');
  }
};
