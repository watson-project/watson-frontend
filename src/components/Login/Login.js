import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';
import styles from './Login.module.css';

function Login(props) {
    const [user, setUser] = useState({});
    return (
			<div className={styles.addContainer}>
				<div className={styles.bgContainer}></div>
				<h3>Log In to Your Account</h3>
				<div className={styles.textContainer}>
					<form className={styles.form}>
						<label htmlFor='email'>Email:</label>
						<input type='text' value={user.email} placeholder='email' />
						<label htmlFor='password'>Password:</label>
						<input type='text' value={user.password} placeholder='password' />
						<button classname={styles.loginBtn} type='submit'>
							<h4>login</h4>
						</button>
						<Link to='/register' className={styles.registerBtn}>
							<h4>Don't have an account? Register now!</h4>
						</Link>
					</form>
				</div>
			</div>
		);
}

export default Login;