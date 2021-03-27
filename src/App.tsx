import React from 'react';
import { Route } from 'react-router';
import './App.scss';

import UsersList from './containers/users_list';

function App() {
  return (
    <div>
      <Route path="/" exact component={UsersList} />
    </div>
  );
}

export default App;
