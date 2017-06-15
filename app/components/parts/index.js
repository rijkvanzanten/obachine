import genre, {modalSettings as genreSettings} from './genre';
import keyword, {modalSettings as keywordSettings} from './keyword';
import type, {modalSettings as typeSettings} from './type';
import sort, {modalSettings as sortSettings} from './sort';
import location, {modalSettings as locationSettings} from './location';

export default {
  genre: {
    machine: genre,
    modal: genreSettings,
  },
  keyword: {
    machine: keyword,
    modal: keywordSettings,
  },
  type: {
    machine: type,
    modal: typeSettings,
  },
  hardsort: {
    machine: sort,
    modal: sortSettings,
  },
  location: {
    machine: location,
    modal: locationSettings,
  },
};
