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
  <div className="uk-container">
    <header className="uk-text-lead uk-text-center">
      <h1>Lista de usuarios</h1>
    </header>
    <br />
    <Users users={users} />
    <br />
  </div>
);

export default App;
