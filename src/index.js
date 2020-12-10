import React from "react";
import ReactDOM from 'react-dom'
import "./index.css";
import App from "./components/App";

export const BASE_URL = 'https://api.nasa.gov/planetary/apod'
export const API_KEY ='SHTUtDeullI7MjKaJhGMtXfzvLhiawuGWgntZHAS'
export const DATE = '2020-01-10'


ReactDOM.render(<App />, document.getElementById('root'))