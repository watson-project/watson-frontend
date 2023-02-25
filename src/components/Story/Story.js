// dependencies
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
// stylesheet
import styles from './Story.module.css';
// images/components
import notFound from '../../assets/not-found.jpg';
// axios
import axios from 'axios';
// context
import { UserContext } from '../../context/UserContext';

function Story(props) {
  const [userContext, setUserContext] = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(null);
  const [noStoryFound, setNoStoryFound] = useState(null);
  const [modal, setModal] = useState(false);
  const [story, setStory] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  async function getStory() {
    try {
      const res = await fetch(
        `https://watson-project.herokuapp.com/api/articles/${id}`
      );
      const data = await res.json();
      setStory(data);
    } catch (error) {
      setNoStoryFound('Something went wrong, try again later');
    }
  }
  // Load story on mount
  useEffect(() => {
    getStory();
    return setStory(null);
  }, []);

  // Delete article
  const handleDelete = () => {
    axios
			.delete(`https://thewatson-backend.herokuapp.com/api/articles${id}`, {
				headers: {
					Authorization: `Bearer ${userContext.token}`,
				},
			})
			.then((res) => {
				navigate('/stories');
			})
			.catch((error) => {
				setErrMsg(error);
			});
  };
  // Navigate to edit article page
  function navigateEdit() {
    navigate(`/edit/${id}`);
  }
  // Show Modal
  const editShowPage = () => {
    setModal(true);
  };
  // Close Modal
  const closeModal = () => {
    setModal(false);
    setErrMsg(null);
  };

  if (!story) {
    <p>{noStoryFound}</p>;
  }

  return (
    <>
      {modal ? (
        <div className={styles.modalContainer}>
          <div className={styles.bgContainer}></div>

          <div className={styles.modalText}>
            {!errMsg ? (
              <h2>Are you sure you want to delete this article?</h2>
            ) : (
              <h2>You are not authorized to delete this article!</h2>
            )}
            <button className={styles.deleteBtn} onClick={handleDelete}>
              Delete
            </button>
            <button className={styles.nevermindBtn} onClick={closeModal}>
              Nevermind
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.storyContainer}>
          <div className={styles.textContainer}>
            <section className={styles.headerContainer}>
              <h5>
                {story
                  ? story.title
                  : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Laboriosam, officiis.'}
              </h5>
              <button onClick={navigateEdit} className={styles.editBtn}>
                Edit
              </button>
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
          <button className={styles.deleteBtn} onClick={editShowPage}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default Story;
