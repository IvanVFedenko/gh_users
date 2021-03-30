import React from 'react';

import { Route } from 'react-router';
import './App.scss';

import UsersList from './containers/users_list';
import OneUser from './containers/user';

function App() {
  const url = window.location.href;
  return (
    <div>
      <Route path="/" exact component={UsersList} />
      <Route path="/users_list/:login" exact component={OneUser} />
    </div>
  );
}

export default App;
