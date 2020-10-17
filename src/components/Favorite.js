import React from 'react';
import favoriteIcon from '../assets/images/start-icon.png';

export default React.memo(() => (
  <div className="box custom-box favorite right-shadow">
    <img alt="favorite" src={favoriteIcon} />
  </div>
));
