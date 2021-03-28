import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_users_thunk, set_current_page } from '../store/actions';
import styles from './styles/users_list.module.scss';
import { User } from '../interfaces/interfaces';
import ShownUsers from '../components/shown_users';
import cn from 'classnames';

const UsersList: FC = () => {
  const dispatch = useDispatch();
  const curr_page = useSelector(
    (state: {
      current_page_since: {
        user_id: string;
      };
    }) => state.current_page_since.user_id
  );
  const users = useSelector(
    (state: { users_list: { all_users: User[] } }) => state.users_list.all_users
  );

  useEffect(() => {
    dispatch(set_users_thunk(curr_page));
  }, [dispatch, curr_page]);

  return (
    <section className={styles.wrapper}>
      <ShownUsers users={users} />
      <div className={styles.buttonContainer}>
        <button
          className={cn(styles.paginationButton, {
            [styles.active]: curr_page === '0',
          })}
          onClick={() => dispatch(set_current_page('0'))}
        >
          1
        </button>
        <button
          className={cn(styles.paginationButton, {
            [styles.active]: curr_page === '19',
          })}
          onClick={() => dispatch(set_current_page('19'))}
        >
          2
        </button>
        <button
          className={cn(styles.paginationButton, {
            [styles.active]: curr_page === '30',
          })}
          onClick={() => dispatch(set_current_page('30'))}
        >
          3
        </button>
        <button
          className={cn(styles.paginationButton, {
            [styles.active]: curr_page === '46',
          })}
          onClick={() => dispatch(set_current_page('46'))}
        >
          4
        </button>
      </div>
    </section>
  );
};

export default UsersList;
