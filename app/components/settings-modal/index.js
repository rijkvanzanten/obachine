import html from 'choo/html';
import styles from './modal.css';

export default ({id, content}, emit) => {
  const {title, children, color} = content;

  return html`
    <div class=${styles.modal} style="background-color: ${color}">
		  <button class=${styles.close} onclick=${close}>✕</button>
			<h2>${title}</h2>
			${children(id, emit)}
		</div>
  `;

  function close() {
    emit('hideModal');
  }
};

