import html from 'choo/html';
import styles from './machineslider.css';
// Import image from './machine-1.svg';

// Export module
export default (state, emit) => {
  return html`
  <div class=${styles.machineslider}>
    <button class=${styles.prev} onclick=${prev}>◀</button>
      <button class=${styles.buildingblock} onclick=${select}>${state.machineslider.activeItem.title}</button>
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
