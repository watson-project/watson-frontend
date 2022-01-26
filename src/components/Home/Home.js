import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import logo_hero from '../../assets/logo-hero.png';
import StoryCard from '../StoryCard/StoryCard';

function Home(props) {
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
    fetch('https://watson-project.herokuapp.com/api/articles')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setStories(res);
      });
    // clear timeout
    return () => clearTimeout(handleLoadingTimeOut);
  },[]);

  if (loading && !stories.length) {
    return <h2>Loading...</h2>;
  }
  if (!loading && !stories.length) {
    return <h2>Something went wrong</h2>;
  }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <p className={styles.firstP}>
          {/* The Watson is an open sourced, blog style website with support for
          text and images. Free from intrusive advertisements and clunky UI's,
          The Watson is the place where you can shout to the masses and be
          heard. Keeping the style of open source, every article is able to be
          viewed, edited, and deleted by any user. */}
          Ideas worth sharing.
        </p>
        <p className={styles.secondP}>Share yours.</p>
        <p className={styles.thirdP}>Share the future.</p>
        <img src={logo_hero} alt='hero logo' />
        <Link to='/stories' className={styles.viewBtn}>
          View Articles
        </Link>
      </div>
      <div className={styles.storiesContainer}>
        <h3>Latest Stories</h3>
        <ul>
          {stories.map((story) => (
            <Link to={`/stories/${story._id}`} key={story._id}>
              <StoryCard story={story} />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
