import image from '../assets/planet.png';
import './style/Rockets.css';

function Rockets() {
  return (
    <div className="rocketsdiv">
      <span className="image"><img src={image} alt="rocket" /></span>
      <div className="elements">
        <h2 className="sub">Falcon 1</h2>
        <p>
          The Rockets section displays a list of all available SpaceX rockets.
          Users can book each rocket by clicking the reservation button or cancel
          the previously made booking.
        </p>
        <button type="button" className="reserve">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default Rockets;
