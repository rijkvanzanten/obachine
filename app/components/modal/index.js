import html from 'choo/html';
import styles from './modal.css';
import styles2 from './close.css';

// Export module
export default (title, content) => // Create html template
html`
  <div class=${styles.modal}>
    <button class=${styles2.close}>✕</button>
    <h2>${title}</h2>
    <p>${content}</p>
  </div>
`;
