import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          OPEN<span>&lt;SOURCE&gt;</span>CODE
        </Link>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </header>
  );
}
