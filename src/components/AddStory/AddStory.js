// dependencies
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// context
import { UserContext } from '../../context/UserContext';
// stylesheet
import styles from './AddStory.module.css';

function AddStory(props) {
  // bring in the UserContext
  const [userContext, setUserContext] = useContext(UserContext);
  const navigate = useNavigate();

  // create a story model to be submitted
  const [story, setStory] = useState({
    title: '',
    author: '',
    photo_url: '',
    content: '',
  });

  // create a function that posts a new article
  const createNewStory = () => {
    fetch(`https://thewatson-backend.herokuapp.com/api/articles`, {
			method: 'POST',
			body: JSON.stringify(story),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userContext.token}`,
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
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
            Add Article
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStory;
