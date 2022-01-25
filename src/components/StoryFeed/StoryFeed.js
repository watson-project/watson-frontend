import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// components
import StoryCard from '../StoryCard/StoryCard';
// stylesheet
import styles from './StoryFeed.module.css';
import vector from '../../assets/Vector.png';

function StoryFeed(props) {
  const { id } = useParams();
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
    <div className={styles.feedContainer}>
      <img src={vector} alt='background' className={styles.vector} />
      <h4>Stories</h4>
      {/* <ul>
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </ul> */}
      <Link to={`/stories/${stories._id}`}>
        <StoryCard />
      </Link>
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </div>
  );
}

export default StoryFeed;
