import React, { useState, useEffect } from 'react';

import styles from '../css/org.module.css';

export default function TopOrganisation() {
  const [Orgs, setOrgs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://api.github.com/organizations');
      const data = await res.json();
      setOrgs(data);
    };
    getData();
  }, []);
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
                id=""
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
      <div className={styles['org-list']}>
        {Orgs.map((org) => (
          <div className={styles['org-card']} key={org.id}>
            <p>{org.login}</p>
            <button type="button">Follow</button>
          </div>
        ))}
      </div>
      <button type="button" className={styles.next}>
        Next
      </button>
    </div>
  );
}
