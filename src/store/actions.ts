import { User } from './../interfaces/interfaces';
import * as action from './types/types';
import * as api from '../api/api';

export const set_users = (value: User[]) => ({
  type: action.SET_USERS,
  value,
});
// export const get_movie = (value: TMovie) => ({ type: action.GET_MOVIE, value });
// export const del_movie = () => ({ type: action.DEL_MOVIE });
// export const get_shows = (value) => ({ type: action.GET_SHOWS, value });
// export const get_show = (value) => ({ type: action.GET_SHOW, value });

export const set_users_thunk = () => async (dispatch) => {
  const movies = await api.get_all_users();
  dispatch(set_users(movies));
};

// export const get_one_movie_thunk = (id) => async (dispatch) => {
//   const movie = await api.get_one_movie(id);
//   dispatch(get_movie(movie));
// };
