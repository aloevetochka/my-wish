import React from 'react';

import RegistrationForm from './RegistrationForm';

import './Sign.scss';

function SignUp() {
  return (
    <div className="sign_up">
      <div className="sign_container">
        <div className="title">MyWish</div>
        <div className="subtitle">Получай то, что хочешь</div>
        <div className="form_field">
          <div className="form">
            <RegistrationForm />
          </div>
          <div className="btn"></div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
