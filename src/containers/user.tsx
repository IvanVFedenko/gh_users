import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { get_one_user_thunk } from '../store/actions';
import { DetailedUser } from '../interfaces/interfaces';

import UserPresenter from '../components/user_presenter';

const OneUser: FC = () => {
  let { login } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_one_user_thunk(login));
  }, []);
  const user = useSelector(
    (state: { one_user: { user: DetailedUser } }) => state.one_user.user
  );
  return (
    <section>
      <UserPresenter data={user} />
    </section>
  );
};

export default OneUser;
