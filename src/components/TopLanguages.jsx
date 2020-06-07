import Router from 'next/router';
import React, { useState, createRef, useContext } from 'react';

import firebase from '../firebase';
import styles from '../scss/org.module.scss';
import UserContext from "./UserContext";

export default function TopOrganisation() {
  const { User } = useContext(UserContext);
  const orgListRef = createRef();
  const list = orgListRef;
  const searchInput = createRef();
  // const [Langs, setLangs] = useState([]);
  const Langs = [
    'Javascript1',
    'Javascript2',
    'Javascript3',
    'Javascript4',
    'Javascript5',
    'Javascript6',
    'Javascript7',
    'Javascript8',
    'Javascript9',
    'Javascript10',
    'Javascript11',
    'Javascript12',
    'Javascript13',
    'Javascript14',
    'Javascript15',
    'Javascript16',
    'Javascript17',
    'Javascript18',
    'Javascript19',
    'Javascript20',
    'Javascript21',
    'Javascript22',
    'Javascript23',
    'Javascript24',
    'Javascript25',
    'Javascript26',
    'Javascript27',
    'Javascript28',
    'Javascript29',
    'Javascript30'
  ];
  const [followed, setFollowed] = useState([]);
  const db = firebase.firestore();

  // SUBMITTING ORGANISATIONS

  const submitLanguages = () => {
    db.collection('users').doc(User.uid).update({
      followingLanguages: followed
    });
    Router.replace('/feed');
  };

  // Search bar function

  const search = () => {
    const listArray = list.current.children;
    for (let i = 0; i < Langs.length; i += 1) {
      if (
        !listArray[i].children[1].innerText
          .toLowerCase()
          .includes(searchInput.current.value.toLowerCase())
      ) {
        listArray[i].style.display = 'none';
      } else {
        listArray[i].style.display = 'flex';
      }
    }
  };

  // FOLLOWED FUNCTIONS

  const addFollow = (name) => {
    setFollowed([...followed, name]);
  };
  const removeFollow = (name) => {
    setFollowed([...followed.filter((element) => element !== name)]);
  };

  // FETCHING Languages

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('https://api.github.com/organizations');
  //     const data = await res.json();
  //     setLangs(data);
  //   };
  //   getData();
  // }, []);

  // SLIDE BUTTONS

  const slideRight = (e) => {
    e.preventDefault();
    list.current.scrollLeft += 600;
  };
  const slideLeft = (e) => {
    e.preventDefault();
    list.current.scrollLeft -= 600;
  };

  return (
    <div>
      <div className={styles.flex}>
        <div>
          <div className={styles.heading}>
            <h1>
              Top Languages
              <hr />
            </h1>
          </div>
          <div className={styles['p-org']}>
            <p>Choose minimum 5 Languages</p>
          </div>
          <div className={styles['search-bar']}>
            <div className={styles['left-col']}>
              <img
                src="/SVG/search-icon.svg"
                alt="search"
                className={styles['search-icon']}
              />
              <input
                type="search"
                name="Search"
                ref={searchInput}
                id=""
                onKeyUp={() => search()}
                className={styles['input-bar']}
                placeholder="Search for Organisation"
              />
            </div>
          </div>
        </div>
        <div />

        <div className={styles['side-image']}>
          <img src="SVG/Group 122.svg" alt="imageside" />
        </div>
      </div>
      <div className={styles['org-container']}>
        <button
          type="button"
          onKeyDown={slideLeft}
          onClick={slideLeft}
          className={styles['slide-left']}>
          <img src="/SVG/arrow-left.svg" alt="<" type="button" />
        </button>

        <div ref={list} className={styles['org-list']}>
          {Langs.map((lang) => (
            <div
              key={lang}
              style={{
                backgroundColor: followed.includes(lang) ? '#00B9B3' : '#6C63FF'
              }}
              className={styles['org-card']}>
              <p href={`https://github.com/${lang}`} target="blank">
                {lang}
              </p>
              <button
                type="button"
                style={{
                  backgroundColor: followed.includes(lang) ? 'black' : 'white',
                  color: followed.includes(lang) ? 'white' : 'black'
                }}
                onClick={() => {
                  if (followed.includes(lang) === true) {
                    removeFollow(lang);
                  } else {
                    addFollow(lang);
                  }
                }}>
                Follow
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onKeyDown={slideRight}
          onClick={slideRight}
          className={styles['slide-right']}>
          <img src="/SVG/arrow-right.svg" alt=">" type="button" />
        </button>
      </div>
      <div className={styles['button-container']}>
        {followed.length > 4 ? (
          <button
            type="button"
            onClick={submitLanguages}
            className={styles.next}>
            Next
          </button>
        ) : (
          <button
            type="button"
            style={{
              cursor: 'not-allowed',
              backgroundColor: '#727272',
              opacity: '0.3'
            }}
            className={styles.next}>
            Finish
          </button>
        )}
        {followed.length > 4 ? null : <p>Please make atleast 5 selections!</p>}
      </div>
    </div>
  );
}
