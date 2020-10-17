import React from 'react';
import Navbar from './Navbar';
import userIcon from '../assets/images/user-icon.png';
import nmIcon from '../assets/images/nm-icon.png';
import searchIcon from '../assets/images/search-icon-transparent.png';

export default () => (
  <header>
    <img src={userIcon} alt="profile" />
    <img src={nmIcon} alt="Norigin Media" className="nm-icon" />
    <div className="navbar">
      <img src={searchIcon} alt="search" />
      <Navbar />
    </div>
  </header>
);
