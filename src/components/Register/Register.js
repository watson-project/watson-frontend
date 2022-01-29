import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import axios from 'axios';

function Register(props) {
	const [registered, setRegistered] = useState({
		email: '',
		password: ''
	});
	const navigate = useNavigate();

	const handleRegistered = () => {
        axios.post('https://watson-project.herokuapp.com/api/signup', registered).then((res) =>{ 
            navigate('/');
        });
    };

	const handleSubmit = (event) => {
        event.preventDefault();
        handleRegistered();
    };

	const handleChange = (event) => {
		setRegistered({ ...registered, [event.target.id]: event.target.value });
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
							type='text'
							value={registered.email}
							placeholder='email'
							onChange={handleChange}
						/>
						<label htmlFor='password'>Password:</label>
						<input
							id='password'
							type='text'
							value={registered.password}
							placeholder='password'
							onChange={handleChange}
						/>
						<button className={styles.loginBtn} type='submit'>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
