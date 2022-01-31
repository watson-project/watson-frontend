// dependencies
import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
// stylesheet
import styles from './Navigation.module.css';
// logo
import logo from '../../assets/logo-small.png';
// images/components
import { FiMenu } from 'react-icons/fi';
// context
import { UserContext } from '../../context/UserContext';

function Navigation(props) {
  const [userContext, setUserContext] = useContext(UserContext);
  // Open/close menu
  const [menu, setMenu] = useState(false);
  // grab the location of url to use on state change
  const location = useLocation();

  // Toggle the menu button to show links
  const toggleMenu = () => {
    setMenu(!menu);
  };

  // Set menu to false when URL location changes
  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <div className={styles.navContainer}>
      <div className={styles.linkContainer}>
        <Link to='/' className={styles.heroimg}>
          <img src={logo} alt='company logo' />
        </Link>
        {/* If menu is open, show links */}
        {menu ? (
          <div className={styles.links}>
            {userContext.token ? (
              <Link to='/stories' className={styles.addLink}>
                Dashboard
              </Link>
            ) : (
              ''
            )}
            <Link to='/about' className={styles.addLink}>
              About
            </Link>
            {userContext.token ? (
              <Link to='/add-story' className={styles.addLink}>
                Add Story
              </Link>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
        <FiMenu onClick={toggleMenu} className={styles.navBtn} />
      </div>
    </div>
  );
}

export default Navigation;
