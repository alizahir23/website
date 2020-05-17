import React from 'react';
import styles from '../../css/feed.module.css';
import FeedOrg from './TopOrg';
import FeedTag from './TopTags';
import FeedLang from './TopLang';
// import ProjectProfile from '../profile/projectProfile';
import Card from '../FeedCard';

export default function FeedFinal() {
  return (
    <div>
      <div className={styles['disp-flex']}>
        <div>
          <FeedLang />
          <FeedOrg />
          <FeedTag />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
