import html from 'choo/html';
import styles from './button.css';

// Export module
export default () => // Create html template
html`
  <button class=${styles.button}>Zet de machine aan!</button>
`;
