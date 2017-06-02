import html from 'choo/html';
import styles from './header.css';

// Export module
export default (state, emit) => {// Create html template
  return html`
    <header class=${styles.header} onclick=${openModal}>
      <h1>OBAchine</h1>
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
