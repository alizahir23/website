import React from 'react';
import Header from '../src/components/Header';
import FeedIntroduction from '../src/components/Feed/FeedIntro';

import SearchBar from '../src/components/SearchBar';
import FeedFinal from '../src/components/Feed/FeedFinal';

const feed = () => (
  <div>
    <Header />
    <FeedIntroduction />
    <SearchBar page="feed" />

    <FeedFinal />

  </div>
);

export default feed;
