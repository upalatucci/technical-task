import React from 'react';
import userIcon from '../assets/images/user-icon.png';
import nmIcon from '../assets/images/nm-icon.png';
import searchIcon from '../assets/images/search-icon.png';

export default () => (
  <header>
    <img src={userIcon} alt="profile" />
    <img src={nmIcon} alt="Norigin Media" className="nm-icon" />
    <img src={searchIcon} alt="search" />
  </header>
);
