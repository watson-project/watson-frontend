import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styles from './Story.module.css';
import notFound from '../../assets/not-found.jpg';
import moment from 'moment';
import axios from 'axios';

function Story(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [story, setStory] = useState(null);
  async function getStory() {
    try {
      const res = await fetch(
        `https://watson-project.herokuapp.com/api/articles/${id}`
      );
      const data = await res.json();
      console.log(data);
      setStory(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStory();
    return setStory(null);
  }, []);
  const handleDelete = () => {
    axios
      .delete(`https://watson-project.herokuapp.com/api/articles/${id}`)
      .then((res) => {
        navigate('/stories');
      });
  };

  return (
    <div className={styles.storyContainer}>
      <div className={styles.textContainer}>
        <section className={styles.headerContainer}>
          <h5>
            {story
              ? story.title
              : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Laboriosam, officiis.'}
          </h5>
          <button>Edit</button>
        </section>
        <section className={styles.aboveImage}>
          <h5>
            Author: <span>{story ? story.author : 'Unknown'}</span>
          </h5>
          <span className={styles.date}>
            {story ? moment(story.createdAt).format('ll') : 'Jan 20, 2022'}
          </span>
        </section>
      </div>
      <img
        src={story ? story.photo_url : notFound}
        alt={story ? story.title : 'Not Found'}
      />
      <p>
        {story
          ? story.content
          : "Oh Mom, there's nothing wrong with calling a boy. Really. Quiet. C'mon. Can't be. This is nuts. Aw, c'mon. Well looky what we have here. No no no, you're staying right here with me. C'mon."}
      </p>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Story;
