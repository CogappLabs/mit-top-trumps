import React from 'react';
import PropTypes from 'prop-types';

const CardImage = (props) => (
  <div className="card-image-container">
    <img src={props.image} className="card-image" alt="" />
  </div>
);

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
}

export default CardImage;
