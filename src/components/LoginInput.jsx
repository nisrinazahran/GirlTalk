import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <div className="mb-3 form">
        <p className="form-label">Email</p>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          aria-describedby="emailHelp"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div className="mb-3 form">
        <p className="form-label">Password</p>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          login({ email, password });
        }}
        type="submit"
        className="btn btn-warning"
      >
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
