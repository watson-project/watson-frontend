// dependencies
import React from 'react';
import moment from 'moment';
// stylesheet
import styles from './StoryCard.module.css';
// images/components
import notFound from '../../assets/not-found.jpg';

function StoryCard({ story }) {
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
