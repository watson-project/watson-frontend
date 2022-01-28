import styles from './Register.module.css';
import React, { useState } from 'react';
import axios from 'axios';

function Register(props) {
	const [createUser, setCreateUser] = useState({});

	async function signUp() {
		axios
			.post(`https://watson-project.herokuapp.com/api/signup`, createUser)
			.then((res) => {
				console.log(res.data);
			})
			.catch(console.log);

		setCreateUser();
	}

	return (
		<div className={styles.addContainer}>
			<div className={styles.bgContainer}></div>
			<h3>Sign Up For An Account</h3>
			<div className={styles.textContainer}>
				<form className={styles.form} onSubmit={signUp}>
					<label htmlFor='email'>Email:</label>
					<input
						type='text'
						value={createUser.email}
						placeholder='email'
						required
					/>
					<label htmlFor='password'>Create Password:</label>
					<input
						type='text'
						value={createUser.password}
						placeholder='password'
						required
					/>
					<button className={styles.loginBtn} type='submit'>
						<h4>sign up</h4>
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
