import html from 'choo/html';
import styles from './machineslider.css';
import prevButton from './prev.svg';
import nextButton from './next.svg';

import buttonAnimation from '../buttonAnimation.css';

export default (state, emit) => {
  const {machineslider: {items, current}} = state;
  const currentItem = items[current];

  return html`
    <div class=${styles.machineslider}>
      <button class=${styles.prev + ' ' + buttonAnimation.hoverEffect} onclick=${prev}><img src=${prevButton} alt="vorige machine"/></button>
      <button data-item=${currentItem} class=${styles.buildingblock + ' ' + buttonAnimation.hoverEffect} onclick=${select}>
        ${currentItem}
      </button>
      <button class=${styles.next + ' ' + buttonAnimation.hoverEffect} onclick=${next}><img src=${nextButton} alt="volgende machine"/></button>
    </div>
  `;

  function next() {
    emit('select-nextItem');
  }

  function prev() {
    emit('select-prevItem');
  }

  function select() {
    emit('select-add', this.getAttribute('data-item'));
  }
};
