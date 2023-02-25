// dependencies
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// stylesheet
import styles from './StoryFeed.module.css';
// images/components
import StoryCard from '../StoryCard/StoryCard';
import { AiOutlinePlus } from 'react-icons/ai';

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

    // clear timeout
    return () => clearTimeout(handleLoadingTimeOut);
  });

  const fetchArticles = () => {
    fetch(`https://thewatson-backend.herokuapp.com/api/articles`)
			.then((res) => res.json())
			.then((res) => {
				setStories(res);
			});
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading && !stories.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.feedContainer}>
      <div className={styles.headerText}>
        <h1>Articles</h1>
        <Link to='/add-story'>
          <AiOutlinePlus />
        </Link>
      </div>
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
  );
}

export default StoryFeed;
