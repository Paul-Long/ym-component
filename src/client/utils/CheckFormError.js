import {Map} from 'immutable';

export function isNotBlank(form, checked = [], error = Map()) {
  checked.map(({key, help}) => {
    if (!form.get(key)) {
      error = error.set(key, {
        validateStatus: 'error',
        help
      });
    }
  });
  return error;
}