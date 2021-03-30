import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_users_thunk, set_current_page } from '../store/actions';
import styles from './styles/users_list.module.scss';
import { User } from '../interfaces/interfaces';
import ShownUsers from '../components/shown_users';
import cn from 'classnames';
import { UsersIDEnum } from '../enums/enums';

const UsersList: FC = () => {
  console.log(window.location);

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
    dispatch(set_users_thunk('10', curr_page));
    window.location.hash = `users?per_page=10&since=${curr_page}`;
  }, [dispatch, curr_page]);

  console.log(window.location.href);

  return (
    <section className={styles.wrapper}>
      <ShownUsers users={users} />
      <div className={styles.buttonContainer}>
        <button
          className={cn(styles.paginationButton, {
            [styles.active]: curr_page === UsersIDEnum.FIRSTPAGE,
          })}
          onClick={() => dispatch(set_current_page(UsersIDEnum.FIRSTPAGE))}
        >
          1
        </button>
        <button
          className={cn(styles.paginationButton, {
            [styles.active]: curr_page === UsersIDEnum.SECONDPAGE,
          })}
          onClick={() => dispatch(set_current_page(UsersIDEnum.SECONDPAGE))}
        >
          2
        </button>
        <button
          className={cn(styles.paginationButton, {
            [styles.active]: curr_page === UsersIDEnum.THIRDPAGE,
          })}
          onClick={() => dispatch(set_current_page(UsersIDEnum.THIRDPAGE))}
        >
          3
        </button>
        <button
          className={cn(styles.paginationButton, {
            [styles.active]: curr_page === UsersIDEnum.FOURTHPAGE,
          })}
          onClick={() => dispatch(set_current_page(UsersIDEnum.FOURTHPAGE))}
        >
          4
        </button>
      </div>
    </section>
  );
};

export default UsersList;
