/* Importaciones de módulos */
import React from 'react';

/* Importaciones de componentes */
import Users from './Users';

const users = [{
  name: 'lorem uno',
  id: 1,
  email: 'email@example.com',
}, {
  name: 'lorem dos',
  id: 2,
  email: 'email@example.com',
}, {
  name: 'lorem tres',
  id: 3,
  email: 'email@example.com',
}];

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Lista de usuarios</h1>
    </header>
    <hr />
    <Users users={users} />
    <br />
  </div>
);

export default App;
