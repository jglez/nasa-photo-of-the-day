import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL, DATE } from '../index';

export default function Photo() {
  const [nasaPhoto, setNasaPhoto] = useState(null);
  const [altText, setAltText] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&date=${DATE}`)
      .then(res => {
        setNasaPhoto(res.data.url);
        setAltText(res.data.explanation);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <h1>Nasa Image of the Day! 🚀</h1>
      <img src={nasaPhoto} alt={altText}/>
    </div>
  )
}