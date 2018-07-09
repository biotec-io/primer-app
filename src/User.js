import React, { Component } from 'react';
import { notification } from 'uikit';

/* en este parte utilizamos destructuring */
/* { name, email } ==> props */
/* name = props.name */
/* email = props.email */

const styles = {
  card: {
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  cardBlue: {
    backgroundColor: 'blue',
    color: '#fefefe',
    borderRadius: 10,
  }
};

/* Componente de Clase o con estado */
class User extends Component {
  constructor() {
    super();

    this.state = {
      text: 'No se ha ejecutado ninguna acción',
      image: 'http://via.placeholder.com/200x200',
    };
  }

  changeText(text) {
    this.setState({ text });
    /* Es un atajo de */
    /* this.setState({ text: text }); */
  }

  triggerNotification(text) {
    notification(text, { status: 'primary' });
    this.setState({ image: 'http://via.placeholder.com/200x200?text=Hola+Eduardo' });
  }

  render() {
    return (
      <div
        key={this.props.id}
        style={styles.card}
      >
        <div className="uk-card uk-card-default uk-card-body"  styles={styles.cardBlue}>
          <h3 className="uk-card-title">Nombre: {this.props.name}</h3>
          <img
            onClick={() => this.triggerNotification(this.props.name)}
            src={this.state.image}
          />
          <p>
            <strong>Correo electrónico:</strong>
            {this.props.email}
          </p>

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
