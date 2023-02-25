// dependencies
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// stylesheet
import styles from './Home.module.css';
// images/components
import logo_hero from '../../assets/logo-hero.png';
import StoryCard from '../StoryCard/StoryCard';
// context
import { UserContext } from '../../context/UserContext';

function Home(props) {
  const [userContext, setUserContext] = useContext(UserContext);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // timeout for fetching the data
    const handleLoadingTimeOut = setTimeout(() => {
      if (!stories.length) {
        setLoading(false);
      }
    }, 5000);
    // Axios request
    fetch('https://thewatson-backend.herokuapp.com/api/articles')
			.then((res) => res.json())
			.then((res) => {
				// Shuffle the res from api
				// After shuffle, slice the first 3 objects and setStories(shuffled);
				// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
				let shuffled = res
					.sort(() => Math.random() - Math.random())
					.slice(0, 3);
				setStories(shuffled);
			});
    // clear timeout
    return () => clearTimeout(handleLoadingTimeOut);
  }, []);

  if (loading && !stories.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <p className={styles.firstP}>Ideas worth sharing.</p>
        <p className={styles.secondP}>Share yours.</p>
        <p className={styles.thirdP}>Share the future.</p>
        <img src={logo_hero} alt='hero logo' />
        {/* If there is a user token, show View Articles, if not, show Login */}
        {userContext.token ? (
          <Link to='/stories' className={styles.viewBtn}>
            View Articles
          </Link>
        ) : (
          <Link to='/login' className={styles.loginBtn}>
            Login
          </Link>
        )}
      </div>
      <div className={styles.storiesContainer}>
        <h3>Latest Stories</h3>
        <ul>
          {stories.map((story) => (
            <li key={story._id}>
              <Link to={`/stories/${story._id}`} key={story._id}>
                <StoryCard story={story} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Home;
