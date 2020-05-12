import React from 'react';
import BoxProfile from '../src/components/profile/profilebox';
import ProjectProfile from '../src/components/profile/projectProfile';
import Header from '../src/components/Header';

function Profile() {
  return (
    <div>
      <Header />
      <BoxProfile />
      <ProjectProfile />
    </div>
  );
}

export default Profile;
