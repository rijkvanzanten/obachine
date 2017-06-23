import genre, {modalSettings as genreSettings} from './genre';
import keyword, {modalSettings as keywordSettings} from './keyword';
import type, {modalSettings as typeSettings} from './type';
import sort, {modalSettings as sortSettings} from './sort';
import location, {modalSettings as locationSettings} from './location';
import author, {modalSettings as authorSettings} from './author';
import language, {modalSettings as languageSettings} from './language';

import authorImage from './author/author-small.svg';
import genreImage from './genre/genre-small.svg';
import keywordImage from './keyword/keyword-small.svg';
import typeImage from './type/type-small.svg';
import locationImage from './location/location-small.svg';
import sortImage from './sort/relevance-small.svg';

export default {
  genre: {
    machine: genre,
    modal: genreSettings,
    image: genreImage,
  },
  keyword: {
    machine: keyword,
    modal: keywordSettings,
    image: keywordImage,
  },
  type: {
    machine: type,
    modal: typeSettings,
    image: typeImage,
  },
  hardsort: {
    machine: sort,
    modal: sortSettings,
    image: sortImage,
  },
  location: {
    machine: location,
    modal: locationSettings,
    image: locationImage,
  },
  author: {
    machine: author,
    modal: authorSettings,
    image: authorImage,
  },
  language: {
    machine: language,
    modal: languageSettings,
  },
};
