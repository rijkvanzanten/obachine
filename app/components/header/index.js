import html from 'choo/html';
import styles from './header.css';
import logo from './oba-logo.svg';

export default () => html`
  <header class=${styles.header}>
    <img class=${styles.logo} src="${logo}" alt="oba logo">
  </header>
`;
