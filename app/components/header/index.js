import html from 'choo/html';
import styles from './styles.css';

export default () => html`
  <header class=${styles.header}>
    <a href="/"><h1>obachine</h1></a>
  </header>
`;
