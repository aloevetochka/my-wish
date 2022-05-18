import React, { Component } from 'react';

import './RegistrationForm.scss';

interface IRegistrationFormState {
  email: string;
  password: string;
  checkPassword: string;
}

interface IRegistrationFormProps {}

class RegistrationForm extends Component<IRegistrationFormProps, IRegistrationFormState> {
  constructor(props: IRegistrationFormProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checkPassword: '',
    };
  }
  handleChangeEmail = (event: any) => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = (event: any) => {
    this.setState({ password: event.target.value });
  };
  checkPassword = (event: any) => {
    this.setState({ checkPassword: event.target.value });
  };

  render() {
    return (
      <form className="form">
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChangeEmail}
          placeholder="Ваш e-mail"
        ></input>
        <input
          type="text"
          value={this.state.password}
          onChange={this.handleChangePassword}
          placeholder="Пароль"
        ></input>
        <input
          type="text"
          value={this.state.checkPassword}
          onChange={this.checkPassword}
          placeholder="Повторите пароль"
        ></input>
        <button>Создать аккаунт</button>
      </form>
    );
  }
}

export default RegistrationForm;
