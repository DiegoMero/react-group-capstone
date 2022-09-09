/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import '../style/Rockets.css';
import { useEffect } from 'react';
import { fetchApi } from '../../Redux/Rockets/RocketsApi';
import CardRockets from './cardRockets';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(fetchApi());
  }, []);

  return (
    <div className="section">
      {rockets.map((rocket) => <CardRockets key={rocket.rocketId} rocket={rocket} />)}
    </div>
  );
}

export default Rockets;
