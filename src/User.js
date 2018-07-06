import React, { Component } from 'react';

/* en este parte utilizamos destructuring */
/* { name, email } ==> props */
/* name = props.name */
/* email = props.email */

/* Componente de Clase o con estado */
class User extends Component {
  constructor() {
    super();

    this.state = {
      text: 'Hola mundo',
    };
  }

  render() {
    return (
      <div key={this.props.id}>
        <div className="uk-card uk-card-default uk-card-body">
          <h3 className="uk-card-title">Nombre: {this.props.name}</h3>
          <p><strong>Correo electrónico:</strong> {this.props.email}</p>

          <p
            onMouseOver={() => this.setState({
                text: 'Adiós mundo',
            })}
          >
            <strong>Texto de estado:</strong>
            {this.state.text == 'Hola mundo' ? 'No se ha ejecutado mi función' : 'Ya se ejecutó'}
          </p>
        </div>

        <br />
      </div>
    );
  }
}

export default User;
