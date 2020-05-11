import React from "react";
import styles from "../../css/profile.module.css";

export default function ProjectProfile() {
  return (
      <div>
          <div className={styles["usernamebox"]}>
        <div className={styles["imgabsolute-lower"]}>
          <img src="SVG/Rectangle 217.svg" alt="project"></img>
        </div>
        <div className={styles["imgabsolute-lowerheart"]}>
          <img src="SVG/heart (1).svg" alt="like"></img>
          <p>213</p>
        </div>
        <div className={styles["top-right-below"]}>
          <div className={styles["langsec"]}>
            <div className={styles["smallbox-below"]}>
              <div className={styles["langsec"]}>
                <div>
                  <img src="SVG/Icon awesome-exclamation-circle.svg" alt="issue"></img>
                </div>
                <div>
                  <p>Issues:13</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles["smallbox-below"]}>
                <div className={styles["langsec"]}>
                  <div>
                    <img src="SVG/pr.svg" alt="pr"></img>
                  </div>
                  <div>
                    <p>PR:1233</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["padding-below"]}>
          <div className={styles["usersname"]}>
            <p>Open Source Code</p>
          </div>
          <div className={styles["date"]}>
            <p>By Organisation | 08 May 2020</p>
            <p className={styles["contentuser"]}>
              There should be some content her. So I am filling this with random
              content inorder to fill this space. Feel free to add on.We can add
              more and more content here so that we can see what this is gonna
              look like on the real website page
            </p>
          </div>
          <div className={styles["langsec"]}>
            <div className={styles["langButtonJS"]}>
              <p>Javascript</p>
            </div>
            <div className={styles["langButtonCSS-below"]}>
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className={styles["savebutton"]}>
          <p>Save</p>
        </div>
      </div>
      </div>
  );}
