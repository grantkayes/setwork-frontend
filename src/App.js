import React, { useState, useEffect } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function App () {
  const [ data, setData ] = useState();

  useEffect(() => {
    const url = runtimeEnv().REACT_APP_API_URL
    fetch(url)
      .then( res => res.json() )
      .then( json => setData(json) );
  }, []);

  return (
    <p>Message: { data }</p>
  );
}

export default App;