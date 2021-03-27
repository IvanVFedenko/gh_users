import { User } from './../../interfaces/interfaces';
import { SET_USERS } from '../types/types';

const initial_state = {
  all_users: [],
};

export const get_all_users_reducer = (
  state = initial_state,
  action: { value: User[]; type: string }
) => {
  const actions = {
    [SET_USERS]: () => ({
      ...state,
      all_users: action.value,
    }),
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
