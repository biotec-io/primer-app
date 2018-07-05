/* Importaciones de módulos */
import React from 'react';

/* Importaciones de componentes */
import User from './User';

const Users = (props) => (
  <ul>
    {props.users.map(user =>
      <User
        name={user.name}
        email={user.email}
        id={user.id}
      />
    )}
  </ul>
);

export default Users;
