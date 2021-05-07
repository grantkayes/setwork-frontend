import React, { useState, useRef, useEffect } from 'react';
import Mix from './Mix';
import './Home.css';
import fetch from 'isomorphic-fetch';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function Home () {
  const [ data, setData ] = useState();
  const [ mixTitle, setMixTitle ] = useState({});
  const mixForm = useRef(null);

  const handleClickEvent = (e) => {
    const form = mixForm.current;
    console.log(form['mix_title'].value);
    e.preventDefault();
 }

  // useEffect(() => {
  //   const url = runtimeEnv().REACT_APP_API_URL
  //   fetch(url)
  //     .then( res => res.json() )
  //     .then( json => setData(json) );
  // }, []);

  return (
    <div>
      <section>
        <form class="main" ref={mixForm}>
          <label for="mix_title" style={{"font-weight": "bold", "margin-bottom": "2vh"}}>Mix title</label>
          <input type="text" id="mix_title" name="mix_title"/>
          <br></br>
          <button onClick={handleClickEvent}>Save</button>
        </form>
      </section>
    </div>
  );
}

export default Home;