import React from 'react';
import styles from './StoryCard.module.css';
import notFound from '../../assets/not-found.jpg';

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
        <h5>{story ? story.author : 'Author'}</h5>
        <p>
          {story
            ? story.title
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sunt?'}
        </p>
        <span>{story ? story.time : 'Time'}</span>
      </div>
      <img
        src={story ? story.photo_url : notFound}
        alt={story ? story.title : 'image not found'}
      />
    </div>
  );
}

export default StoryCard;
