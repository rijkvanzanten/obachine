import html from 'choo/html';
import styles from './machine.css';
// Import block from './machine-1.svg';

const svgs = {
  genre: require('./machine-1.svg'),
  type: require('./machine-1.svg'),
  year: require('./machine-1.svg'),
  place: require('./machine-1.svg'),
  author: require('./machine-1.svg'),
  pages: require('./machine-1.svg'),
  color: require('./machine-1.svg')
};

console.log(svgs);

// Export module
export default () => // Create html template
html`
  <div>
    <h1 class=${styles.machine}>bowen</h1>
    <img src=${svgs.genre} role="presentation" />
  </div>
`;
