import React from 'react';
import styles from './About.module.css';
import linkedin from '../../assets/linkedin-logo.png'

function About(props) {
	return (
		<div className={styles.aboutContainer}>
			<div className={styles.bgContainer}>
				<h3 className={styles.titleContainer}>
					Every voice needs a&nbsp;
					<span className={styles.listenerContainer}>Listener.</span>
				</h3>
				<div className={styles.aboutBoxContainer}>
					<div className={styles.storyContainer}>
						{/* <img src={logo} alt='hero-logo' className={styles.imageContainer} /> */}
						<div className={styles.textContainer}>
							<p>
								Our best chance of keeping the peace is to reach out. The Watson
								is a place full of listeners, allowing users to speak, think of
								creative ideas and spark conversations. An open platform where
								readers and writers can share their thoughts. We the community
								understand the importance of lifting one another up with the
								power of listening. Our purpose is to help those spread original
								ideas and deepen their understanding of the world around us.
							</p>
							<br></br>
							<h3>Share the Future</h3>
						</div>
					</div>
					<div className={styles.developerContainer}>
						<h4>Developers:</h4>
						<a
							href='https://www.linkedin.com/in/landon-spell/'
							rel='noopener noreferrer'
							target='_blank'>
							Landon Spell <img className={styles.linkedin} src={linkedin} alt='linkedin logo' />
						</a>
						,{' '}
						<a
							href='https://www.linkedin.com/in/stuntmccartney/'
							rel='noopener noreferrer'
							target='_blank'>
							David Gales <img className={styles.linkedin} src={linkedin} alt='linkedin logo' />
						</a>
						,{' '}
						<a
							href='https://www.linkedin.com/in/michelapathinvo/'
							rel='noopener noreferrer'
							target='_blank'>
							Michel Pathinvo <img className={styles.linkedin} src={linkedin} alt='linkedin logo' />
						</a>{' '}
						&{' '}
						<a
							href='https://www.linkedin.com/in/joesphchang/'
							rel='noopener noreferrer'
							target='_blank'>
							Joey Chang <img className={styles.linkedin} src={linkedin} alt='linkedin logo' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
