import html from 'choo/html';
import styles from './machineslider.css';

// Export module
export default () => // Create html template
html`
  <div class=${styles.machineslider}>
    <button class=${styles.prev} onclick="next()">◀</button>
      <div class=${styles.buildingblock}>Welke genres hou je van?</div>
      <div class=${styles.buildingblock}>Welke type hou je van?</div>
      <div class=${styles.buildingblock}>Welke kleur hou je van?</div>
    <button class=${styles.next} onclick="console.log('joe')">▶</button>
  </div>
`;

// Cnsole.log(blocks.length);
