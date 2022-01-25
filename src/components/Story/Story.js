import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Story.module.css';
import notFound from '../../assets/not-found.jpg';

function Story(props) {
  const { story } = useParams();
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
            {story ? story.createdAt : 'Jan 20, 2022'}
          </span>
        </section>
      </div>
      <img src={notFound} alt='image not found' />
      <p>
        Oh Mom, there's nothing wrong with calling a boy. Really. Quiet. C'mon.
        Can't be. This is nuts. Aw, c'mon. Well looky what we have here. No no
        no, you're staying right here with me. C'mon, more, dammit. Jeez. Holy
        shit. Let's see if you bastards can do ninety. Wrecked? When did this
        happen and- Calvin, why do you keep calling me Calvin? Why is she gonna
        get angry with you? Wait a minute, wait a minute, Doc, are you telling
        me that you built a time machine out of a delorean. Right. Lou, gimme a
        milk, chocolate. Lorraine, my density has popped me to you. It's about
        the future, isn't it? Hey man, look at Marvin's hand. He can't play with
        his hands like that, and we can't play without him. No no no no no,
        Marty, both you and Jennifer turn out fine. <br></br>It's your kids, Marty,
        something has got to be done about your kids. Oh, just a little weather
        experiment. My name's Lorraine, Lorraine Baines. Uh, yeah. Go. Go. What,
        what is it hot? Hey c'mon, I had to change, you think I'm going back in
        that zoot suit? The old man really came through it worked. Yeah, well
        uh, lets keep this brain melting stuff to ourselves, okay? Oh, uh, hey
        you, get your damn hands off her. Do you really think I oughta swear?
        Can't be. This is nuts. Aw, c'mon. Hi. Oh Mom, there's nothing wrong
        with calling a boy. <br></br>Really. Quiet. C'mon. Can't be. This is nuts. Aw,
        c'mon. Well looky what we have here. No no no, you're staying right here
        with me. C'mon, more, dammit. Jeez. Holy shit. Let's see if you bastards
        can do ninety. Wrecked? When did this happen and- Calvin, why do you
        keep calling me Calvin? Why is she gonna get angry with you? Wait a
        minute, wait a minute, Doc, are you telling me that you built a time
        machine out of a delorean. Right. Lou, gimme a milk, chocolate.
        Lorraine, my density has popped me to you. It's about the future, isn't
        it? Hey man, look at Marvin's hand. He can't play with his hands like
        that, and we can't play without him. No no no no no, Marty, both you and
        Jennifer turn out fine. It's your kids, Marty, something has got to be
        done about your kids. Oh, just a little weather experiment. My name's
        Lorraine, Lorraine Baines. Uh, yeah. Go. Go. What, what is it hot? Hey
        c'mon, I had to change, you think I'm going back in that zoot suit? The
        old man really came through it worked. Yeah, well uh, lets keep this
        brain melting stuff to ourselves, okay? Oh, uh, hey you, get your damn
        hands off her. Do you really think I oughta swear? Can't be. This is
        nuts. Aw, c'mon. Hi.
      </p>
      <button className={styles.deleteBtn}>Delete</button>
    </div>
  );
}

export default Story;
