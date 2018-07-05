import React from 'react';

/* en este parte utilizamos destructuring */
/* { name, email } ==> props */
/* name = props.name */
/* email = props.email */
const User = ({ name, email }) => (
  /* firstName = props.name.firstName */
  <div>
    <h1>
      Nombre: {name}
    </h1>
    <h2>
      Correo: {email}
    </h2>
  </div>
);

export default User;
