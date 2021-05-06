import React, { useState, useEffect } from 'react';
import Mix from './Mix';
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
        <p>Message: { data }</p>
        <Mix/>
    </div>
  );
}

export default Home;