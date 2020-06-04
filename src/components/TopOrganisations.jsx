import React, { useState, useEffect, createRef } from 'react';

import styles from '../css/org.module.css';

export default function TopOrganisation() {
  const orgListRef = createRef();
  const list = orgListRef;
  const searchInput = createRef();
  const [Orgs, setOrgs] = useState([]);
  const [followed, setFollowed] = useState([]);

  // Search bar function

  const search = () => {
    const listArray = list.current.children;
    for (let i = 0; i < Orgs.length; i += 1) {
      if (
        !listArray[i].firstElementChild.innerText
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

  // FETCHING ORGANISATIONS

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://api.github.com/organizations');
      const data = await res.json();
      setOrgs(data);
    };
    getData();
  }, []);

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
              Top Organisations
              <hr />
            </h1>
          </div>
          <div className={styles['p-org']}>
            <p>Choose minimum 5 Organisation</p>
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
          onClick={slideLeft}
          type="button"
          className={styles['slide-left']}>
          <img src="/SVG/arrow-left.svg" alt="<" />
        </button>
        <div ref={list} className={styles['org-list']}>
          {Orgs.map((org) => (
            <div
              style={{
                backgroundColor: followed.includes(org.login)
                  ? '#00B9B3'
                  : '#6C63FF'
              }}
              className={styles['org-card']}
              key={org.id}>
              <a href={`https://github.com/${org.login}`} target="blank">
                {org.login}
              </a>
              <button
                type="button"
                style={{
                  backgroundColor: followed.includes(org.login)
                    ? 'black'
                    : 'white',
                  color: followed.includes(org.login) ? 'white' : 'black'
                }}
                onClick={() => {
                  if (followed.includes(org.login) === true) {
                    removeFollow(org.login);
                  } else {
                    addFollow(org.login);
                  }
                }}>
                Follow
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={slideRight}
          type="button"
          className={styles['slide-right']}>
          <img src="/SVG/arrow-right.svg" alt=">" />
        </button>
      </div>
      <button type="button" className={styles.next}>
        Next
      </button>
      <button
        type="button"
        className={styles.unselect}
        onClick={() => {
          setFollowed([]);
        }}>
        Unselect All
      </button>
    </div>
  );
}
