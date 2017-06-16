import html from 'choo/html';
import styles from './machineslider.css';
import prevButton from './prev.svg';
import nextButton from './next.svg';
import parts from '../parts';

export default (state, emit) => {
  const currentItem = state.items[state.current];
  return html`
    <li class=${styles.machineslider}>
      <div class=${styles.placeholder}>
        <div class=${styles.flexcontainer}>
          <button class=${styles.prev} onclick=${prev}><img src=${prevButton} alt="vorige machine"/></button>
          <button data-item=${currentItem} class=${styles.buildingblock} onclick=${select}>
            ${parts[currentItem].machine()}
          </button>
          <button class=${styles.next} onclick=${next}><img src=${nextButton} alt="volgende machine"/></button>
        </div>
      </div>
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
