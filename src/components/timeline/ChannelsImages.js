import React from 'react';
import PropTypes from 'prop-types';

const ChannelsImages = React.memo(({ channels }) => (
  <div className="channels">
    <div className="timeline-time border-bottom right-shadow" />
    {channels.map((c) => (
      <div className="box custom-box box-channel border-bottom right-shadow" key={c.id}>
        <img src={c.images.logo} alt={c.title} />
      </div>
    ))}
  </div>
));

ChannelsImages.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({
    images: PropTypes.objectOf({
      logo: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default ChannelsImages;
