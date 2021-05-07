import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function Home () {
  const [ data, setData ] = useState();
  const [ mixTitle, setMixTitle ] = useState(null);
  const mixForm = useRef(null);

  const handleFormSubmit = async (e) => {
    const form = mixForm.current;
    setMixTitle(form['mix_title'].value);
    console.log(mixTitle)

    axios
      .post('/api/home', {mixTitle})
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
  }

  useEffect(() => {
    const url = runtimeEnv().REACT_APP_API_URL
    axios.get(url)
      .then( res => setData(res.data) )
  }, []);

  return (
    <div>
      <section>
        <form class="main" ref={mixForm}>
          <label for="mix_title" style={{"font-weight": "bold", "margin-bottom": "2vh"}}>Mix title</label>
          <input type="text" id="mix_title" name="mix_title"/>
          <br></br>
          <input type="button" value="Save" onClick={handleFormSubmit}/>
        </form>
        <h2>Message from API: {data}</h2>
      </section>
    </div>
  );
}

export default Home;