import html from 'choo/html';
import header from '../components/header';
import bodyStyles from './body.css';

export default function main(state, emit) {
  const genreValue = state.store[state.params.id].genres.genre;
  let genres = [];

  if (genreValue) {
    if (Array.isArray(genreValue)) {
      genres = genreValue;
    } else {
      genres = [genreValue];
    }
  }

  return html`
    <body class=${bodyStyles.body}>
      ${header(state, emit)}
      <a href="/">◀</a>
      <h2>${state.store[state.params.id].titles['short-title']}</h2>
      <div>${state.store[state.params.id].formats.format}</div>
      <div>${state.store[state.params.id].summaries.summary}</div>
      <img src=${state.store[state.params.id].coverimages.coverimage[1]} />
      <ul>${genres.map(genre => html`<li>${genre}</li>`)}</ul>
    </body>
  `;

}
