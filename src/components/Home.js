import React, { useState, useEffect } from 'react';
import Mix from './Mix';
import './Home.css';
import fetch from 'isomorphic-fetch';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function Home () {
  const [ data, setData ] = useState();

  useEffect(() => {
    const url = runtimeEnv().REACT_APP_API_URL
    fetch(url)
      .then( res => res.json() )
      .then( json => setData(json) );
  }, []);

  return (
    <div>
      <section class="navbar">
        <div class="topnav">
         <a class="brand">Setwork</a>
         <a class="active" href="#home">Home</a>
        </div>    
      </section>
      <section>
        <form class="main">
          <label for="mix_title">Mix title</label>
          <input type="text" id="mix_title" name="mix_title"/>
          <br></br>
          <input type="submit" value="Submit"/>
        </form>
      </section>
    </div>
  );
}

export default Home;