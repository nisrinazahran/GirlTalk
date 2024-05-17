import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function Login() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <div className="container">
        <div className="image">
          <img src="./logo1.png" alt="" />
        </div>
        <div className="login-page__main">
          <LoginInput login={onLogin} />
          <p className="form">
            Belum punya akun?
            <Link to="/register" className="form">
              Daftar disini
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
