import { User } from './../interfaces/interfaces';
import * as action from './types/types';
import * as api from '../api/api';

export const set_users = (value: User[]) => ({
  type: action.SET_USERS,
  value,
});

export const set_user = (value: User) => ({ type: action.SET_USER, value });
export const del_user = () => ({ type: action.DEL_USER });

export const set_current_page = (value: string | null) => ({
  type: action.SET_CURRENT_PAGE,
  value,
});

export const set_users_thunk = (since: string = '0') => async (
  dispatch: (arg0: { type: string; value?: User[] }) => void
) => {
  const users = await api.get_all_users(since);
  dispatch(set_users(users));
  dispatch(del_user());
};

export const get_one_user_thunk = (login: string) => async (
  dispatch: (arg0: { type: string; value: User }) => void
) => {
  const user = await api.get_one_user(login);
  dispatch(set_user(user));
};
