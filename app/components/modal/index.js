import html from 'choo/html';
import styles from './modal.css';

// Export module
export default () => // Create html template
html`
  <header class=${styles.modal}>
    <h1>Kies het thema waar je boek over moet gaan!</h1>
    <p>Welkom, bij de vernieuwde zoekmachine van de Openbare Bibliotheek van Amsterdam.</p>
    <p>Op deze applicatie kan je een eigen zoekmachine in elkaar zetten om zo altijd de juiste content te vinden waar jij naar zoekt.</p>
  </header>
`;
