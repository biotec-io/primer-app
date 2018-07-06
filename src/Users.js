/* Importaciones de módulos */
import React from 'react';

/* Importaciones de componentes */
import User from './User';

/* Componentes Puros o Componentes sin estado */
const Users = (props) => (
  <div className="uk-width-1-1 uk-width-1-3@s">
    {props.users.map(user =>
      <User
        name={user.name}
        email={user.email}
        id={user.id}
      />
    )}
  </div>
);

export default Users;
