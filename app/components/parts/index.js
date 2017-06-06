import genre, {modalSettings as genreSettings} from './genre';
import author, {modalSettings as authorSettings} from './author';
import type, {modalSettings as typeSettings} from './type';

export default {
  genre: {
    machine: genre,
    modal: genreSettings
  },
  author: {
    machine: author,
    modal: authorSettings
  },
  type: {
    machine: type,
    modal: typeSettings
  }
};
