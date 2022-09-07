import './style/Missions.css';

const Missions = () => (
  <div className="missions-section">
    <div className="missions-header">
      <div className="mission-column">Mission</div>
      <div className="description-column">Description</div>
      <div className="status-column">Status</div>
      <div className="join-mission-column" />
    </div>
    <ul className="missions-list">
      <li className="mission-card">
        <div className="mission-name">Thaicom</div>
        <div className="mission-description">Thaicom is the name of a series of communications satellites and more</div>
        <div className="mission-member-status">
          <div>NOT A MEMBER</div>
        </div>
        <div className="mission-join-button">
          <button type="button">Join Mission</button>
        </div>
      </li>
    </ul>
  </div>
);

export default Missions;
