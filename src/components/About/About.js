import React from 'react';
import styles from './About.module.css';
import logo from '../../assets/logo-hero.png';

function About(props) {
	return (
		<>
			<h3 className={styles.titleContainer}>
				Every voice needs a&nbsp;<span className={styles.listenerContainer}>Listener.</span>
			</h3>
			<div className={styles.aboutContainer}>
				<div className={styles.storyContainer}>
					<img src={logo} alt='hero-logo' className={styles.imageContainer} />
					<h4>Our Story</h4>
					<p>
						Our best chance of keeping the peace is to reach out. The Watson is
						a place full of listeners, allowing users to speak, think of
						creative ideas and spark conversations. An open platform where
						readers and writers can share their thoughts. We the community
						understand the importance of lifting one another up with the power
						of listening. Our purpose is to help those spread original ideas and
						deepen their understanding of the world around us.
					</p>
				</div>
				<h4>Developers:</h4>
				<h5 className={styles.developerContainer}>
					<a
						href='https://www.linkedin.com/in/landon-spell/'
						rel='noopener noreferrer'
						target='_blank'>
						Landon Spells
					</a>
					,{' '}
					<a
						href='https://www.linkedin.com/in/stuntmccartney/'
						rel='noopener noreferrer'
						target='_blank'>
						David Gales
					</a>
					,{' '}
					<a
						href='https://www.linkedin.com/in/michelapathinvo/'
						rel='noopener noreferrer'
						target='_blank'>
						Michel Pathinvo
					</a>{' '}
					&{' '}
					<a
						href='https://www.linkedin.com/in/joesphchang/'
						rel='noopener noreferrer'
						target='_blank'>
						Joey Chang
					</a>
				</h5>
			</div>
		</>
	);
}

export default About;