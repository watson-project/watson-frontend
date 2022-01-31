import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { useRef } from 'react';
import { AiFillEye } from 'react-icons/ai';

function Login(props) {
  const togglePass = useRef(null);
  const [showPass, setShowPass] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    loggedIn: true,
  });
  const [userContext, setUserContext] = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();

  const handleLogIn = () => {
    axios
      .post(`https://watson-project.herokuapp.com/api/signin`, user)
      .then((res) => {
        console.log(res);
        if (res.data === 'The provided username or password is incorrect') {
          setErrMsg(res.data);
        }
        if (res.data !== 'The provided username or password is incorrect') {
          console.log(res);
          setUserContext((user) => {
            navigate('/');
            console.log(res);
            return { ...user, token: res.data.token };
          });
          // setUserContext({...user, token: res.data.token });
          // navigate('/');
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogIn();
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
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
    <div className={styles.addContainer}>
      <div className={styles.bgContainer}></div>
      <h3>Log In to Your Account</h3>
      <div className={styles.textContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            value={user.email}
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
              value={user.password}
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
          {errMsg ? <p className={styles.errMsg}>{errMsg}</p> : ''}
          <button className={styles.loginBtn} type='submit'>
            <h4>login</h4>
          </button>
          <span className={styles.registerText}>
            Don't have an account?&nbsp;
            <Link to='/register' className={styles.registerBtn}>
              Register
            </Link>
            &nbsp;now!
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
