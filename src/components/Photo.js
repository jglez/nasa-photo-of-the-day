import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL, DATE } from '../constants/constants';
import styled from 'styled-components';

const StyledPhoto = styled.div`
  background-color: white;
  margin: 0 auto;
  width: 1200px;

  h1 {
    font-family: Nasalization W05 Regular, Monospace;
    margin: 0px 0px 50px 0px;
    color: black;
    font-size: 3.5rem;
  }

  img {
    margin: 0px 0px 0px 0px;
    height: 700px;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, .5);
  }
`

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
    <StyledPhoto>
      <h1>Nasa Image of the Day! <span role='img' aria-label='rocket'>🚀</span></h1>
      <img src={nasaPhoto} alt={altText}/>
    </StyledPhoto>
  )
}