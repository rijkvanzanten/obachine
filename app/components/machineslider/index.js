import html from 'choo/html';
import styles from './machineslider.css';

// Export module
export default () => // Create html template
html`
  <div class=${styles.machineslider}>
    <button class=${styles.machineslider.prev}>◀</button>
    <div>Welke genres hou je van?</div>
    <button class=${styles.machineslider.next}>▶</button>
  </div>
`;
