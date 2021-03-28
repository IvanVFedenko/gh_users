import React, { FC } from 'react';
import styles from './styles/user_presenter.module.scss';
import { DetailedUser } from '../interfaces/interfaces';
import { useHistory } from 'react-router-dom';

interface Props {
  data: DetailedUser;
}

const UserPresenter: FC<Props> = ({ data }: Props) => {
  let history = useHistory();
  return (
    <section className={styles.wrapper}>
      <div
        className={styles.backButton}
        title="go back"
        onClick={() => history.goBack()}
      ></div>
      <p className={styles.backTextG}>Go </p>
      <p className={styles.backTextB}>Back</p>

      <div className={styles.upperBlock}>
        <div className={styles.avatarContainer}>
          {data.avatar_url && (
            <img className={styles.avatar} src={data.avatar_url} alt="avatar" />
          )}
        </div>
        <div className={styles.infoWrapper}>
          {data.name && (
            <div className={styles.detailWrapper}>
              <p className={styles.detailName}>name: </p>
              <p className={styles.detail}>{data.name}</p>
            </div>
          )}
          {data.login && (
            <div className={styles.detailWrapper}>
              <p className={styles.detailName}> nickName:</p>
              <p className={styles.detail}>{data.login}</p>
            </div>
          )}
          {data.email && (
            <div className={styles.detailWrapper}>
              <p className={styles.detailName}>email:</p>
              <p className={styles.detail}>{data.email}</p>
            </div>
          )}
          {data.location && (
            <div className={styles.detailWrapper}>
              <p className={styles.detailName}> location:</p>
              <p className={styles.detail}> {data.location}</p>
            </div>
          )}
          {data.company && (
            <div className={styles.detailWrapper}>
              <p className={styles.detailName}> company:</p>
              <p className={styles.detail}> {data.company}</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.redirectButton}>
        <a href={data.html_url} target="_blank" rel="noreferrer">
          view repo
        </a>
      </div>
    </section>
  );
};

export default UserPresenter;
