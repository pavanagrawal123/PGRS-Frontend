import React, { Component } from 'react';
import Router from 'next/router'
//import { withRouter } from 'react-router-dom';

//import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        Router.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (

      <form onSubmit={this.onSubmit}>
        <div class="signincontainer col-centered">
          <h1 class="title">LOG IN</h1>
          <div class="input">
            <input
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type="text"
              placeholder="Username"
            />
            <span class="spin"></span>
          </div>
        </div>
        <div className="signincontainer col-centered">
          <input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="button login col-centered">
         <button><span>GO</span> <i class="fa fa-check"></i></button>
      </div>

        { error && <p>{error.message}</p> }
      </form>

    );
  }
}

export default SignInPage;

export {
  SignInForm,
};
