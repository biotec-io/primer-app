/* Importaciones de módulos */
import React from 'react';

/* Importaciones de componentes */
import User from './User';

/* Componentes Puros o Componentes sin estado */
const Users = ({ users }) => (
  <div data-uk-grid>
    {users.map(user =>
      <div className="uk-width-1-1 uk-width-1-3@s">
        <User
          name={user.name}
          email={user.email}
          id={user.id}
        />
      </div>
    )}
  </div>
);

export default Users;
