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
      text: 'No se ha ejecutado ninguna acción',
    };
  }

  changeText(text) {
    this.setState({ text });
    /* Es un atajo de */
    /* this.setState({ text: text }); */
  }

  render() {
    return (
      <div key={this.props.id}>
        <div className="uk-card uk-card-default uk-card-body">
          <h3 className="uk-card-title">Nombre: {this.props.name}</h3>
          <p><strong>Correo electrónico:</strong> {this.props.email}</p>

          <button
            onMouseOver={() => this.changeText('Al entrar el mouse')}
            onMouseOut={() => this.changeText('Al salir el mouse')}
          >
            {this.state.text}
          </button>
        </div>

        <br />
      </div>
    );
  }
}

export default User;
