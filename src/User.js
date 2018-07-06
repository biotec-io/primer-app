import React from 'react';

/* en este parte utilizamos destructuring */
/* { name, email } ==> props */
/* name = props.name */
/* email = props.email */

/* Componentes Puros o Componentes sin estado */
const User = ({ name, email, id }) => (
  /* firstName = props.name.firstName */
  <div key={id}>
    <div className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Nombre: {name}</h3>
      <p><strong>Correo electrónico:</strong> {email}</p>
    </div>

    <br />
  </div>
);

export default User;
