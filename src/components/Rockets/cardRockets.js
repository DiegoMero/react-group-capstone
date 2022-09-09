/* eslint-disable linebreak-style */
import React from 'react';
import '../style/Rockets.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/Rockets/RocketsApi';

function CardRockets({ rocket }) {
  const dispatch = useDispatch();

  const {
    rocketId, rocketName, rocketDesc, rocketImg, rocketReserved,
  } = rocket;

  const reserveHandler = () => {
    dispatch(reserveRocket(rocketId));
  };

  const cancelHandler = () => {
    dispatch(cancelRocket(rocketId));
  };

  return (
    <section className="rocketsdiv" key={rocketId}>
      <span className="image"><img src={rocketImg} alt="rocket" /></span>
      <div className="elements">
        <h2 className="sub" key={rocketId}>{rocketName}</h2>
        <p>
          {rocketReserved === true && (<span className="rocketreserved">Reserved</span>)}
          {rocketDesc}
        </p>
        {rocketReserved === true
          ? (
            <button
              type="button"
              id={rocketId}
              className="cancelreserve"
              onClick={cancelHandler}
            >
              Cancel Reservation
            </button>
          )
          : (
            <button
              type="button"
              id={rocketId}
              className="reserve"
              onClick={reserveHandler}
            >
              Reserve Rocket
            </button>
          )}
      </div>
    </section>
  );
}

CardRockets.propTypes = {
  rocket: PropTypes.shape({
    rocketId: PropTypes.string,
    rocketName: PropTypes.string,
    rocketDesc: PropTypes.string,
    rocketImg: PropTypes.string,
    rocketReserved: PropTypes.bool,
  }).isRequired,
};

export default CardRockets;
