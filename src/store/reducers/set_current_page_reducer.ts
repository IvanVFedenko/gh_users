import { SET_CURRENT_PAGE } from '../types/types';
const initial_state = {
  user_id: '0',
};

export const set_current_page_reducer = (
  state = initial_state,
  action: { value: string; type: string }
) => {
  const actions = {
    [SET_CURRENT_PAGE]: () => ({
      ...state,
      user_id: action.value,
    }),
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
