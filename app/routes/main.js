import html from 'choo/html';
import header from '../components/header';
import footer from '../components/footer';
import styles from './body.css';

export default function main() {
  return html`
    <body class=${styles.body}>
      ${header()}
      ${footer()}
    </body>
  `;
}
