import html from 'choo/html';
import styles from './header.css';
import logo from './oba-logo.svg';

// Export module
export default (state, emit) => {// Create html template
  return html`
    <header class=${styles.header} onclick=${openModal}>
      <img class=${styles.logo} src="${logo}" alt="oba logo">
    </header>
  `;

  function openModal() {
    emit('updateModal', {
      title: 'Welkom!',
      content: 'Dit is de vernieuwde zoekmachine van de Openbare Bibliotheek van Amsterdam. Op deze applicatie kan je een eigen zoekmachine in elkaar zetten om zo altijd de juiste content te vinden waar jij naar zoekt.'
    });
    emit('openModal');
  }
};
