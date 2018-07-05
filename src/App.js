/* Importaciones de módulos */
import React from 'react';

/* Importaciones de componentes */
import User from './User';

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

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Lista de usuarios</h1>
    </header>
    <hr />
    <User
      name="Roberto"
      email="roberto@mail.com"
    />
    <br />
  </div>
);

export default App;
