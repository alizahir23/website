import React from 'react';
import styles from '../../css/profile.module.css';

export default function BoxProfile() {
  return (
    <div>
      <div className={styles['usernamebox-profile']}>
        <div className={styles.imgabsolute}>
          <img src="SVG/Rectangle 60.svg" alt="Profile pic" />
        </div>

        <div className={styles['user-flex']}>
          <div>
            <div className={styles.boxcontent}>
              <p className={styles['usersname-user']}>Arya Soni</p>
              <img src="SVG/Vector 5 (1).svg" alt="underline" />
              <p>@aryasoni98</p>

              <p className={styles['usersname-user']}>Developer</p>
            </div>
          </div>

          <div>
            <div className={styles['top-right']}>
              <div className={styles.langsec}>
                <div>
                  <img src="SVG/social-media.svg" alt="github" />
                </div>
                <div className={styles['top-right-in']}>
                  <img src="SVG/Linkedin.svg" alt="linkedin" />
                </div>
                <div className={styles['top-right-in']}>
                  <img src="SVG/brands-and-logotypes.svg" alt="linkedin" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <p className={styles.usercontent}>Something about the user. User will give it later.</p>
          <p className={styles.usercontent}>The information will be given.User information</p>
        </div>

        <div className={styles.langsec}>
          <div>
            <p className={styles.userskills}>Skills</p>
          </div>
          <div className={styles.langButtonJS}>
            <p>Javascript</p>
          </div>
          <div className={styles.langButtonCSS}>
            <p>CSS</p>
          </div>
        </div>

        <div className={styles['langsec-centre']}>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles['smallboxwriting-follow']}>
                <p>Follow</p>
              </div>
              <div className={styles.count}>
                <p>1</p>
              </div>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.smallboxwriting}>
                <p>Likes</p>
              </div>
              <div className={styles.count}>
                <p>5</p>
              </div>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.smallboxwriting}>
                <p>Save</p>
              </div>
              <div className={styles.count}>
                <p>5</p>
              </div>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles['smallboxwriting-osp']}>
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
