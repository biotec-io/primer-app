import React from 'react';
import logo from './logo.svg';
import './App.css';

const users = [{
  username: 'lorem uno',
  id: 1,
  email: 'email@example.com',
}, {
  username: 'lorem dos',
  id: 2,
  email: 'email@example.com',
}, {
  username: 'lorem tres',
  id: 3,
  email: 'email@example.com',
}];

const listItems = users.map((user) =>
  <li key={user.id}>
    <ul>
      <li>Nombre de usuario: {user.username}</li>
      <li>Correo: {user.email}</li>
    </ul>
  </li>
);

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <ul>{listItems}</ul>
  </div>
);

export default App;
