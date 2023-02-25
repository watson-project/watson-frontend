// dependencies
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// stylesheet
import styles from './Register.module.css';
// axios
import axios from 'axios';
// images/components
import { AiFillEye } from 'react-icons/ai';

function Register(props) {
  const togglePass = useRef(null);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [registered, setRegistered] = useState({
    email: '',
    password: '',
  });

  const handleRegistered = () => {
    axios
			.post(
				'https://thewatson-backend.herokuapp.com/api/signup',
				registered
			)
			.then((res) => {
				navigate('/login');
			});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegistered();
  };

  const handleChange = (event) => {
    setRegistered({ ...registered, [event.target.id]: event.target.value });
  };

  const showPassword = () => {
    if (showPass) {
      togglePass.current.attributes['1'].value = 'text';
    }
    if (!showPass) {
      togglePass.current.attributes['1'].value = 'password';
    }
    setShowPass(!showPass);
  };

  return (
    <div>
      <div className={styles.addContainer}>
        <div className={styles.bgContainer}></div>
        <h3>Register Your Account</h3>
        <div className={styles.textContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='email'
              value={registered.email}
              placeholder='email'
              onChange={handleChange}
              autoComplete='off'
            />
            <label htmlFor='password'>Password:</label>
            <div className={styles.passwordDiv}>
              <input
                ref={togglePass}
                id='password'
                className={styles.password}
                type='password'
                value={registered.password}
                placeholder='password'
                onChange={handleChange}
                autoComplete='off'
              />
              <button
                type='button'
                onClick={showPassword}
                className={styles.toggleEye}>
                <AiFillEye />
              </button>
            </div>
            <button className={styles.loginBtn} type='submit'>
              Register
            </button>
            <span className={styles.registerText}>
              Already have an account?&nbsp;
              <Link to='/login' className={styles.registerBtn}>
                Login
              </Link>
              &nbsp;now!
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
