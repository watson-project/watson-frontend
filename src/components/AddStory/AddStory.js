import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './AddStory.module.css';

function AddStory(props) {
  const navigate = useNavigate();
  const [story, setStory] = useState({
    title: '',
    author: '',
    photo_url: '',
    content: '',
  });

  const createNewStory = () => {
    axios
      .post(`https://watson-project.herokuapp.com/api/articles`, story)
      .then((res) => {
        console.log(res.data);
        navigate('/stories');
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewStory();
  };
  const handleChange = (e) => {
    setStory({ ...story, [e.target.id]: e.target.value });
  };

  return (
    <div className={styles.addContainer}>
      <div className={styles.bgContainer}></div>
        <h3>Add A New Article</h3>
      <div className={styles.textContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            onChange={handleChange}
            id='author'
            value={story.author}
            placeholder='Author'
          />
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            onChange={handleChange}
            id='title'
            value={story.title}
            placeholder='Title'
          />
          <label htmlFor='photo_url'>Photo URL</label>
          <input
            type='text'
            onChange={handleChange}
            id='photo_url'
            value={story.photo_url}
            placeholder='Photo URL'
          />
          <label htmlFor='content'>Content</label>
          <textarea
            type='text'
            onChange={handleChange}
            id='content'
            className={styles.content}
            value={story.content}
            placeholder='Story...'
            rows='15'
            cols='50'
          />
          <button type='submit' className={styles.addBtn}>
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStory;
