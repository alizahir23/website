import React from 'react';
import BoxProfile from '../src/components/profile/profilebox';
import ProjectProfile from '../src/components/profile/projectProfile';
import HeadProfile from '../src/components/profile/projectHeading';
import Header from '../src/components/Header';

function Profile() {
  return (
    <div>
      <Header />
      <BoxProfile />
      <HeadProfile />
      <ProjectProfile />
    </div>
  );
}

export default Profile;
