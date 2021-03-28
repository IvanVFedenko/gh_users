import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { get_all_users_reducer } from './reducers/get_all_users_reducer';
import { get_user_reducer } from './reducers/get_one_user_reducer';
import { set_current_page_reducer } from './reducers/set_current_page_reducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const rootReducer = combineReducers({
  users_list: get_all_users_reducer,
  one_user: get_user_reducer,
  current_page_since: set_current_page_reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const users = ({ users_list }) => users_list.all_users;
export const user = ({ one_user }) => one_user.user;
export const current_page = ({ current_page_since }) =>
  current_page_since.user_id;

const store = createStore<any & PersistPartial, any, any, any>(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
