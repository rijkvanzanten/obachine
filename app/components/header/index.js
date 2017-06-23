import html from 'choo/html';
import styles from './header.css';
import logo from './oba-logo.svg';

export default () => html`
  <header class=${styles.header}>
    <a href="/"><img src="${logo}" alt="oba logo"></a>
  </header>
`;
