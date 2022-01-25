import React from 'react';
import styles from './StoryCard.module.css';

function StoryCard({ story }) {
  return (
    <div className={styles.cardContainer}>
      {/* <div className={styles.textContainer}>
        <h5>{story.author}</h5>
        <p>{story.title}</p>
        <span>{story.time}</span>
      </div>
      <img src={story.photo_url} alt={story.title} /> */}
      <div className={styles.textContainer}>
        <h5>Author</h5>
        <p>Title</p>
        <span>Time</span>
      </div>
      <img src='url' alt='title' />
    </div>
  );
}

export default StoryCard;
