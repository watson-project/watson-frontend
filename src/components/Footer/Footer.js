import React from 'react';
import styles from './Footer.module.css';
function Footer(props) {
  return (
    <div className={styles.footerContainer}>
      <span>The Watson &copy; | Deployed by Netlify & Heroku</span>
    </div>
  );
}

export default Footer;
