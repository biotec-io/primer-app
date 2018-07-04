import React from 'react';

const Users = (props) => (
  <div>
    <h1>
      Nombre: {props.name}
    </h1>
    <h2>
      Correo: {props.email}
    </h2>
  </div>
);

export default Users;
