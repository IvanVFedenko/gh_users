import React, { useEffect, useState, FC } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { set_users_thunk } from '../store/actions';
import { User } from '../interfaces/interfaces';
import ShownUsers from '../components/shown_users';

const UsersList: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_users_thunk());
  }, []);

  const users = useSelector(
    (state: { users_list: { all_users: User[] } }) => state.users_list.all_users
  );

  return (
    <section>
      <ShownUsers all_users={users} />
    </section>
  );
};

export default UsersList;
