import React from 'react';
import { useState } from 'react';
import styles from './AddStory.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStory(props) {
  const navigate = useNavigate();
  const [story, setStory] = useState({
    title: '',
    author: 'Anonymous',
    photo_url: '',
    content: '',
  });
  const handleChange = (e) => {
    setStory({ ...story, [e.target.id]: e.target.valule });
  };
  const createNewStory = () => {
    axios.post(`url`, story).then((res) => {
      console.log(res);
    });

    navigate('/stories');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewStory();
  };

  return (
    <div className={styles.addContainer}>
      <h3>Add A New Post</h3>
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
  );
}

export default AddStory;
