import React, { FC } from 'react';
import styles from './styles/shown_users.module.scss';
import { Link } from 'react-router-dom';
import { User } from '../interfaces/interfaces';

interface Props {
  users: User[];
}
const ShownUsers: FC<Props> = (props: Props) => {
  const { users } = props;

  return (
    <section className={styles.wrapper}>
      {users &&
        users.map((user, i) => (
          <div className={styles.userContainer} key={user.id}>
            <Link to={`/users_list/${user.login}`}>
              <div className={styles.innerWrapper}>
                <div className={styles.avatarContainer}>
                  {user.avatar_url && (
                    <img
                      src={user.avatar_url}
                      className={styles.avatar}
                      alt="avatar"
                    />
                  )}
                </div>
                <div className={styles.nameContainer}>
                  {user.login && <p>{user.login}</p>}
                </div>
              </div>
            </Link>

            <div className={styles.redirectButton}>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                view repo
              </a>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ShownUsers;
