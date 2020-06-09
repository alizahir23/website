import React, { useContext, useEffect, useState } from 'react';

import firebase from '../../firebase';
import styles from '../../scss/profile.module.scss';
import UserContext from '../UserContext';

export default function BoxProfile() {
  const db = firebase.firestore();
  const { User } = useContext(UserContext);
  const [Loading, setLoading] = useState(true);
  const [UserData, setUserData] = useState({});
  // const [MissingData, setMissingData] = useState(false);

  useEffect(() => {
    if (User)
      db.collection('users')
        .doc(User.uid)
        .get()
        .then((data) => {
          setUserData(data.data());
          setLoading(false);
        });
  }, [User]);

  if (Loading)
    return (
      <div className={styles.loading}>
        <img src="/SVG/loading.svg" alt="loading..." />
      </div>
    );
  return (
      <div>
        {/* {MissingData ? (
          <div className={styles.alert}>Update your profile...</div>
        ) : null} */}
        <div className={styles['usernamebox-profile']}>
          <div className={styles['user-flex']}>
            <div className={styles['top-left-col']}>
              <img
                className={styles.imgabsolute}
                src="SVG/Rectangle 60.svg"
                alt="Profile pic"
              />

              <div className={styles.boxcontent}>
                <h2 className={styles['usersname-user']}>{UserData.name}</h2>
                <hr
                  className={styles.hr}
                  style={{ width: '20%', color: '#707070' }}
                />
                <p style={{ fontWeight: '200' }}>@{UserData.userName}</p>

                <p className={styles['username-skill']}>{UserData.title}</p>
                <div className={styles.langsec}>
                  {UserData.skills.map((skill) => {
                    return (
                      <div key={skill} className={styles.skill}>
                        <p>{skill}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles.links}>
              <div>
                <a href={UserData.github} target="blank">
                  <img src="SVG/social-media.svg" alt="github" />
                </a>
              </div>
              <div className={styles['top-right-in']}>
                <a href={UserData.linkedin}>
                  <img src="SVG/Linkedin.svg" alt="linkedin" />
                </a>
              </div>
              <div className={styles['top-right-in']}>
                <a href={UserData.twitter}>
                  <img src="SVG/brands-and-logotypes.svg" alt="twitter" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.usercontent}>
            {UserData.about ? <p>{UserData.about}</p> : <p>No about...</p>}
          </div>

          <div className={styles['langsec-centre']}>
            <div className={styles.smallbox}>
              <div className={styles.langsec}>
                <div className={styles.smallboxwriting}>
                  <p>Follow</p>
                </div>
                <div className={styles.count}>
                  <p>
                    {UserData.followingOrganisations.length +
                      UserData.followingLanguages.length}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.smallbox}>
              <div className={styles.langsec}>
                <div className={styles.smallboxwriting}>
                  <p>Likes</p>
                </div>
                <div className={styles.count}>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className={styles.smallbox}>
              <div className={styles.langsec}>
                <div className={styles.smallboxwriting}>
                  <p>Save</p>
                </div>
                <div className={styles.count}>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className={styles.smallbox}>
              <div className={styles.langsec}>
                <div className={styles.smallboxwriting}>
                  <p>OSP</p>
                </div>
                <div className={styles.count}>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
