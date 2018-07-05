import React from 'react';

/* en este parte utilizamos destructuring */
/* { name, email } ==> props */
/* name = props.name */
/* email = props.email */
const User = ({ name, email, id }) => (
  /* firstName = props.name.firstName */
  <li key={id}>
    <div>
      <h1>
        Nombre: {name}
      </h1>
      <h2>
        Correo: {email}
      </h2>
      <h3>
        ID: {id}
      </h3>
    </div>
  </li>
);

export default User;
