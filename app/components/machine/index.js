import html from 'choo/html';
import styles from './machine.css';
// Import block from './machine-1.svg';

const svgs = {
  core: require('./machine-core.svg'),
  type: require('./machine-genre.svg'),
  author: require('./machine-author.svg'),
  color: require('./machine-color.svg'),
  start: require('./start-tunnel.svg'),
  end: require('./end-tunnel.svg'),
  piperl: require('./pipe-rl.svg'),
  pipemiddle: require('./pipe-middle.svg'),
  piper: require('./pipe-middle.svg')
};

console.log(svgs);

// Export module
export default () => // Create html template
html`
  <div class=${styles.container}>
    <h1 class=${styles}></h1>
    <img class=${styles.tunnel} src=${svgs.start} role="presentation" />
    <img class=${styles.machine} src=${svgs.core} role="presentation" />
    <img class=${styles.pipem} src=${svgs.pipemiddle} role="presentation" />
    <img class=${styles.machine} src=${svgs.color} role="presentation" />
    <img class=${styles.piperl} src=${svgs.piperl} role="presentation" />
    <img class=${styles.machine} src=${svgs.author} role="presentation" />
    <img class=${styles.piper} src=${svgs.piper} role="presentation" />
    <img class=${styles.machine} src=${svgs.type} role="presentation" />
    <img class=${styles.tunnel} src=${svgs.end} role="presentation" />
  </div>
`;
