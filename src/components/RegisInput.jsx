import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <form>
      <div className="mb-3 form">
        <p className="form-label">Nama</p>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          aria-describedby="nameHelp"
          value={name}
          onChange={onNameChange}
        />
      </div>
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
        onClick={() => register({ name, email, password })}
        type="button"
        className="btn btn-warning"
      >
        Register
      </button>
    </form>
  );
}

RegisInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisInput;
