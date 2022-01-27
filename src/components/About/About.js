import React from 'react';
import styles from './About.module.css';
import logo from '../../assets/logo-hero.png';

function About(props) {
	return (
		<>
			<h3 className={styles.titleContainer}>
				Every voice needs a&nbsp;
				<span className={styles.listenerContainer}>Listener.</span>
			</h3>
			<div className={styles.aboutContainer}>
				<div className={styles.storyContainer}>
					{/* <img src={logo} alt='hero-logo' className={styles.imageContainer} /> */}
					<span>Our Story</span>
					<p className={styles.textContainer}>
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
				<div className={styles.developerContainer}>
					<a
						href='https://www.linkedin.com/in/landon-spell/'
						rel='noopener noreferrer'
						target='_blank'>
						Landon Spell
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
				</div>
				<div className={styles.blobs}>
					<svg
						viewBox='0 0 200 200'
						xmlns='http://www.w3.org/2000/svg'
						className={styles.blobJ}>
						<path
							fill='#0F62FE'
							d='M37.7,-46.6C52.3,-41.3,70,-34.9,77,-22.8C83.9,-10.7,80.2,7.1,71.8,20.4C63.4,33.7,50.4,42.6,37.7,51.2C24.9,59.8,12.5,68.1,0.9,66.9C-10.6,65.6,-21.3,54.8,-28.8,44.5C-36.3,34.2,-40.7,24.4,-48.8,12.7C-56.8,1.1,-68.6,-12.5,-69.6,-26.7C-70.6,-40.9,-60.9,-55.7,-47.5,-61.4C-34.1,-67.2,-17.1,-63.8,-2.8,-60C11.6,-56.2,23.1,-52,37.7,-46.6Z'
							transform='translate(100 100)'
						/>
					</svg>
					<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
						<path
							fill='#FF0066'
							d='M37.7,-46.6C52.3,-41.3,70,-34.9,77,-22.8C83.9,-10.7,80.2,7.1,71.8,20.4C63.4,33.7,50.4,42.6,37.7,51.2C24.9,59.8,12.5,68.1,0.9,66.9C-10.6,65.6,-21.3,54.8,-28.8,44.5C-36.3,34.2,-40.7,24.4,-48.8,12.7C-56.8,1.1,-68.6,-12.5,-69.6,-26.7C-70.6,-40.9,-60.9,-55.7,-47.5,-61.4C-34.1,-67.2,-17.1,-63.8,-2.8,-60C11.6,-56.2,23.1,-52,37.7,-46.6Z'
							transform='translate(100 100)'
						/>
					</svg>
					<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
						<path
							fill='#24A148'
							d='M37.7,-46.6C52.3,-41.3,70,-34.9,77,-22.8C83.9,-10.7,80.2,7.1,71.8,20.4C63.4,33.7,50.4,42.6,37.7,51.2C24.9,59.8,12.5,68.1,0.9,66.9C-10.6,65.6,-21.3,54.8,-28.8,44.5C-36.3,34.2,-40.7,24.4,-48.8,12.7C-56.8,1.1,-68.6,-12.5,-69.6,-26.7C-70.6,-40.9,-60.9,-55.7,-47.5,-61.4C-34.1,-67.2,-17.1,-63.8,-2.8,-60C11.6,-56.2,23.1,-52,37.7,-46.6Z'
							transform='translate(100 100)'
						/>
					</svg>
					<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' className={styles.blobL}>
						<path
							// fill='#FA4D56'
							d='M37.7,-46.6C52.3,-41.3,70,-34.9,77,-22.8C83.9,-10.7,80.2,7.1,71.8,20.4C63.4,33.7,50.4,42.6,37.7,51.2C24.9,59.8,12.5,68.1,0.9,66.9C-10.6,65.6,-21.3,54.8,-28.8,44.5C-36.3,34.2,-40.7,24.4,-48.8,12.7C-56.8,1.1,-68.6,-12.5,-69.6,-26.7C-70.6,-40.9,-60.9,-55.7,-47.5,-61.4C-34.1,-67.2,-17.1,-63.8,-2.8,-60C11.6,-56.2,23.1,-52,37.7,-46.6Z'
							transform='translate(100 100)'
						/>
					</svg>
				</div>
			</div>
		</>
	);
}

export default About;
