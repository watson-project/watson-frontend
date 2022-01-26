import React from 'react';
import styles from './StoryCard.module.css';
import notFound from '../../assets/not-found.jpg';
import moment from 'moment';

function StoryCard({ story }) {
  // console.log(story.photo_url);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.textContainer}>
        <h5>{story ? story.author : 'Author'}</h5>
        <p>
          {story
            ? story.title
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sunt?'}
        </p>
        <span>{story ? moment(story.createdAt).format('lll') : 'Time'}</span>
      </div>
      <img
        src={story ? story.photo_url : notFound}
        alt={story ? story.title : 'image not found'}
      />
    </div>
  );
}

export default StoryCard;
