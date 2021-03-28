import { User } from './../../interfaces/interfaces';
import { SET_USER, DEL_USER } from '../types/types';

const initial_state = {
  user: {},
};

export const get_user_reducer = (
  state = initial_state,
  action: { value: User; type: string }
) => {
  const actions = {
    [SET_USER]: () => ({
      ...state,
      user: action.value,
    }),
    [DEL_USER]: () => ({
      ...state,
      user: initial_state,
    }),
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
