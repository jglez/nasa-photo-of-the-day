import React, { useState } from 'react';
import "../App.css";
import axios from 'axios';
import Photo from './Photo';     // Default import
// import {Header} from './Header'; // Named import

function App() {
  return(
    <div className='App'>
      {/* <button>Click for NASA Photo of the Day!</button> */}
      <Photo />
    </div>
  )
}

export default App;
