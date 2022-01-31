import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// components
import StoryCard from '../StoryCard/StoryCard';
// stylesheet
import styles from './StoryFeed.module.css';
import vector from '../../assets/Vector.png';
import { AiOutlinePlus } from 'react-icons/ai';

function StoryFeed(props) {
  // const { id } = useParams();
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
    fetch(`https://watson-project.herokuapp.com/api/articles/`)
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
  // if (!loading && !stories.length) {
  //   return <h2>Something went wrong</h2>;
  // }

  return (
    <div className={styles.feedContainer}>
      {/* <img src={vector} alt='background' className={styles.vector} /> */}
      {/* <div className={styles.vector}></div> */}
      <div className={styles.headerText}>
        <h4>Articles</h4>
        <input type='text' />
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
