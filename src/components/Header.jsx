import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          OPEN
          <span>&lt;SOURCE&gt;</span>
          CODE
        </Link>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="icon" onClick="myFunction()">
          <i className="fa fa-bars" />
        </a>
      </div>
    </header>
  );
}
