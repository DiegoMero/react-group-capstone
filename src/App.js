import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Rockets" element={<Rockets />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    );
  }
}
