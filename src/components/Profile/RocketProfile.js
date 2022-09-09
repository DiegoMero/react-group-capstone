import React from 'react';
import '../style/Profile.css';
import propTypes from 'prop-types';

function RocketProfile({ name }) {
  return (
    <div className="rocket-profile">
      <h4 className="name">{name}</h4>
    </div>
  );
}

export default RocketProfile;

RocketProfile.propTypes = {
  name: propTypes.string.isRequired,
};
