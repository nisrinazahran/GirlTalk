import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisInput from '../components/RegisInput';
import { asyncRegisterUser } from '../states/users/action';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="register-page">
      <div className="container">
        <div className="image">
          <img src="./logo1.png" alt="" />
        </div>
        <div className="register-page__main">
          <RegisInput register={onRegister} />
        </div>
      </div>
    </section>
  );
}

export default Register;
