import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './styles/shown_users.module.scss';
import { User } from '../interfaces/interfaces';

interface Props {
  all_users: User[];
}
const ShownUsers: FC<Props> = (props: Props) => {
  const { all_users } = props;
  console.log(all_users[0]);

  return (
    <section className={styles.wrapper}>
      {all_users.map((user, i) => (
        <div className={styles.userContainer} key={user.id}>
          <div className={styles.avatarContainer}>
            <img src={user.avatar_url} className={styles.avatar} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ShownUsers;
