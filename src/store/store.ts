import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { get_all_users_reducer } from './reducers/get_all_users_reducer';

const rootReducer = combineReducers({
  users_list: get_all_users_reducer,
});

export const users = ({ users_list }) => users_list.all_users;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
