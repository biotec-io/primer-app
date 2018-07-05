import React from 'react';

/* en este parte utilizamos destructuring */
/* { name, email } ==> props */
/* name = props.name */
/* email = props.email */
const User = ({ name, email, id }) => (
  /* firstName = props.name.firstName */
  <div>
    <div className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Nombre: {name}</h3>
      <p><strong>Correo electrónico:</strong> {email}</p>
    </div>

    <br />
  </div>
);

export default User;
