import React, { Component } from 'react';
import { notification } from 'uikit';

import './user.css';
import Button from './Components/Button';
import ButtonDos from './Components/ButtonDos';

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
    this.setState({ image: `http://via.placeholder.com/200x200?text=Hola+${text}` });
  }

  render() {
    return (
      <div
        key={this.props.id.toString()}
        className="black radius"
      >
        <div
          className="uk-card uk-card-default uk-card-body"
        >
          <h3 className="uk-card-title">Nombre: {this.props.name}</h3>
          <img
            onClick={() => this.triggerNotification(this.props.name)}
            src={this.state.image}
          />
          <p>
            <strong>Correo electrónico:</strong>
            {this.props.email}
          </p>

          <Button
            onClick={() => this.triggerNotification(this.props.name)}
            color="blue"
          >
            {this.state.text}
          </Button>

          <ButtonDos
            type="danger"
            text={this.state.text}
          />

        </div>

        <br />
      </div>
    );
  }
}

export default User;
