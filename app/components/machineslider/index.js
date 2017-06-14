import html from 'choo/html';
import styles from './machineslider.css';
import prevButton from './prev.svg';
import nextButton from './next.svg';
import parts from '../parts';

export default (state, emit) => {
  const currentItem = state.items[state.current];
  return html`
    <li class=${styles.machineslider}>
      <button class=${styles.prev} onclick=${prev}><img src=${prevButton} alt="vorige machine"/></button>
      <div class=${styles.placeholder}>
        <p>Kies een machine...</p>
        <button data-item=${currentItem} class=${styles.buildingblock} onclick=${select}>
          ${parts[currentItem].machine()}
        </button>
        <p>${currentItem}</p>
      </div>
      <button class=${styles.next} onclick=${next}><img src=${nextButton} alt="volgende machine"/></button>
    </li>
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
