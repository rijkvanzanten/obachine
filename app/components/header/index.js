import html from 'choo/html';
import styles from './header.css';

// Export module
export default () => // Create html template
html`
  <header class=${styles.header}>
    <h1>OBAchine</h1>
  </header>
`;
