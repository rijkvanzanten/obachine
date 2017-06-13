import genre, {modalSettings as genreSettings} from './genre';
import author, {modalSettings as authorSettings} from './author';
import type, {modalSettings as typeSettings} from './type';
import sort, {modalSettings as sortSettings} from './sort';
import location, {modalSettings as locationSettings} from './location';

export default {
  genre: {
    machine: genre,
    modal: genreSettings,
  },
  author: {
    machine: author,
    modal: authorSettings,
  },
  type: {
    machine: type,
    modal: typeSettings,
  },
  hardsort: {
    machine: sort,
    modal: sortSettings,
  locatie: {
    machine: location,
    modal: locationSettings,
  },
};
