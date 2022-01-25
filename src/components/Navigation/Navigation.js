import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
// logo
import logo from '../../assets/logo-small.png';

function Navigation(props) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.linkContainer}>
        <Link to='/' className={styles.heroimg}>
          <img src={logo} alt='company logo' />
        </Link>
        <div className={styles.links}>
          <Link to='/stories' className={styles.addLink}>Dashboard</Link>
          <Link to='/add-story' className={styles.addLink}>Add Story</Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
