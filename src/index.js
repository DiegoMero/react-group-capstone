/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

let missions = [
  {
    id: '1',
    name: 'bola1',
    description: 'culo1',
  },
  {
    id: '2',
    name: 'bola2',
    description: 'culo2',
  },
  {
    id: '3',
    name: 'bola3',
    description: 'culo3',
  },
];

const id = '2';

missions = missions.map((element) => {
  if (element.id !== id) { return element; }
  return { ...element, reserved: true };
});

console.log(missions);
