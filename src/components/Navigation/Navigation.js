import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
// logo
import logo from '../../assets/logo.png';

function Navigation(props) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.linkContainer}>
        <img src={logo} alt='company logo' />
        <Link to='/stories'>Add Story</Link>
      </div>
    </div>
  );
}

export default Navigation;
