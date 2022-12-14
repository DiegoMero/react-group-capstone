import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import MyProfile from './components/Profile/MyProfile';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/Rockets';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    );
  }
}
