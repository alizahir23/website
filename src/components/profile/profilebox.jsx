import React from 'react';
import styles from '../../css/profile.module.css';

export default function BoxProfile() {
  return (
    <div>
      <div className={styles['usernamebox-profile']}>
        <div className={styles.imgabsolute}>
          <img src="SVG/young-man.svg" alt="Profile pic" />
        </div>

        <div className={styles['user-flex']}>
          <div>
            <div className={styles.boxcontent}>
              <p className={styles['usersname-user']}>User</p>
              <p className={styles.usercontent}>Something about the user</p>
              <p className={styles.usercontent}>
                User information given by user
              </p>
            </div>
          </div>

          <div>
            <div className={styles['top-right']}>
              <div className={styles.langsec}>
                <div>
                  <img src="SVG/Github.svg" alt="github" />
                </div>
                <div className={styles['top-right-in']}>
                  <img src="SVG/Linkedin.svg" alt="linkedin" />
                </div>
              </div>

              <p>@aryasoni98</p>

              <img src="SVG/underline (1).svg" alt="underline" />
            </div>
          </div>
        </div>
        <div className={styles.margin}>
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
        </div>
        <div className={styles['langsec-centre']}>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.follow}>
                <img src="SVG/people 1.svg" alt="follow" />
              </div>
              <div className={styles.count}>
                <p>1</p>
              </div>
            </div>
            <div className={styles['smallboxwriting-follow']}>
              <p>Follow</p>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.heart}>
                <img src="SVG/heart.svg" alt="heart" />
              </div>
              <div className={styles.count}>
                <p>5</p>
              </div>
            </div>
            <div className={styles.smallboxwriting}>
              <p>Likes</p>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.heart}>
                <img src="SVG/interface 1.svg" alt="save" />
              </div>
              <div className={styles.count}>
                <p>5</p>
              </div>
            </div>
            <div className={styles.smallboxwriting}>
              <p>Save</p>
            </div>
          </div>
          <div className={styles.smallbox}>
            <div className={styles.langsec}>
              <div className={styles.heart}>
                <img src="SVG/multimedia 1.svg" alt="osp" />
              </div>
              <div className={styles.count}>
                <p>1</p>
              </div>
            </div>
            <div className={styles['smallboxwriting-osp']}>
              <p>OSP</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}
