import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    );
  }
}
