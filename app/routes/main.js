import html from 'choo/html';
import header from '../components/header';
import footer from '../components/footer';
import modal from '../components/modal';
import styles from './body.css';

export default function main() {
  return html`
    <body class=${styles.body}>
      ${header()}
      ${modal()}
      ${footer()}
    </body>
  `;
}
