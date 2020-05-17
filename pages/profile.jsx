import React from 'react';
import BoxProfile from '../src/components/profile/profilebox';
import Card from '../src/components/FeedCard';
// import ProjectProfile from '../src/components/profile/projectProfile';

import Header from '../src/components/Header';

function Profile() {
  return (
    <div>
      <Header />
      <BoxProfile />
      <Card />
    </div>
  );
}

export default Profile;
