import React, {useState} from 'react';
import './App.css';

//Components 
import Header from './components/Header';
import Person from './components/Person';
import Lonely from './components/Lonely';

//import dummy data
import data from './data.json'

const App = () => {
  return (
  <div className="app">
    <Header />
    
  </div>
  ) 
}

export default App;