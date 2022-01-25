import React, { useEffect, useState } from 'react';
import axios from 'axios';
// components
import StoryCard from '../StoryCard/StoryCard';
// stylesheet
import styles from './StoryFeed.module.css';

function StoryFeed(props) {
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
      <h4>Stories</h4>
      <ul>
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </ul>
      <StoryCard/>
      <StoryCard/>
      <StoryCard/>
    </div>
  );
}

export default StoryFeed;
