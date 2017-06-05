import html from 'choo/html';
import styles from './machineslider.css';
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
export default (state, emit) => {
  return html`
  <div class=${styles.machineslider}>
    <button class=${styles.prev} onclick=${prev}>◀</button>
    <button class=${styles.buildingblock} onclick=${select}>${state.machineslider.activeItem} <img src=${svgs[state.machineslider.activeItem.toLowerCase()]} role="presentation" /></button>
    <button class=${styles.next} onclick=${next}>▶</button>
  </div>
`;

  function next() {
    emit('next');
  }

  function prev() {
    emit('prev');
  }

  function select() {
    emit('select', this);
  }
};
