import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/Navbar';

const Home = () => {

  return (
    <div>
    <NavBar></NavBar>
    <h1>Buy It Buy Me! </h1>
    <p>Shop in real life nearby</p>
    <p>Support your local economy</p>
    <p>Save our home planet</p>
    </div>
  );
}

export default Home;