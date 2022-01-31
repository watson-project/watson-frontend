// dependencies
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// stylesheet
import styles from './EditStory.module.css';
// axios
import axios from 'axios';
// context
import { UserContext } from '../../context/UserContext';

function EditStory(props) {
  // bring in UserContext
  const [userContext, setUserContext] = useContext(UserContext);

  const { id } = useParams();
  const navigate = useNavigate();

  // create a story model to be submitted
  const [story, setStory] = useState({
    title: '',
    author: '',
    photo_url: '',
    content: '',
  });

  // Get the data from specified article
  useEffect(() => {
    axios
      .get(`https://watson-project.herokuapp.com/api/articles/${id}`)
      .then((res) => {
        setStory(res.data);
      });
  }, [id]);

  // use axios to PUT new data in edit page
  const editArticle = () => {
    axios
      .put(`https://watson-project.herokuapp.com/api/articles/${id}`, story, {
        headers: {
          Authorization: `Bearer ${userContext.token}`,
        },
      })
      .then((res) => {
        navigate(`/stories/${id}`);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editArticle();
  };
  const handleChange = (e) => {
    setStory({ ...story, [e.target.id]: e.target.value });
  };

  return (
    <div className={styles.editContainer}>
      <div className={styles.bgContainer}></div>
      <h3>Edit Article</h3>
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
          <button type='submit' className={styles.editBtn}>
            Submit Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditStory;
