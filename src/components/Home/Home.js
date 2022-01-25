import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import logo_hero from '../../assets/logo-hero.png';

function Home(props) {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <img src={logo_hero} alt='hero logo' />
        <Link to='/stories' className={styles.viewBtn}>
          View Articles
        </Link>
        <p>
          The Watson is home to malesuada proin libero nunc. Sagittis vitae et
          leo duis ut. Cras ornare arcu dui vivamus arcu felis bibendum ut
          tristique. Non arcu risus quis varius quam quisque. Mi quis hendrerit
          dolor magna eget est lorem. In est ante in nibh mauris cursus mattis
          molestie. Rhoncus urna neque viverra justo nec ultrices. Vulputate
          dignissim suspendisse in est ante in. Pellentesque habitant morbi
          tristique senectus et.
        </p>
      </div>
    </div>
  );
}

export default Home;
