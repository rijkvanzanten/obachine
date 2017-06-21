export function toArray(value) {
  let array = [];

  if (value) {
    if (Array.isArray(value)) {
      array = value;
    } else {
      array = [value];
    }
  }

  return array;
}

export function getValue(object, ...keys) {
  keys.forEach(key => {
    if (object[key]) {
      object = object[key];
    } else {
      return false;
    }
  });

  return object;
}
