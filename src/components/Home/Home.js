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
    fetch('url')
      .then((res) => res.json())
      .then((res) => {
        setStories(res);
      });
    // clear timeout
    return () => clearTimeout(handleLoadingTimeOut);
  });

  // if (loading && !stories.length) {
  //   return <h2>Loading...</h2>;
  // }
  // if (!loading && !stories.length) {
  //   return <h2>Something went wrong</h2>;
  // }
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
      <div className={styles.storiesContainer}>
      <h3>Latest Stories</h3>
        <ul>
          {stories.map((story) => (
            <StoryCard key={story._id} story={story} />
          ))}
        </ul>
        <StoryCard/>
        <StoryCard/>
        <StoryCard/>
      </div>
    </div>
  );
}

export default Home;
