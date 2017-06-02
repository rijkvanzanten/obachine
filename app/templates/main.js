import html from 'choo/html';
import styles from './main.css';

export default function main() {
  return html`
    <div class=${styles.main}>Choo Choo!</div>
  `;
}

