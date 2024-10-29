import React from 'react';
import Food from '../assets/restaurant-food.jpg'
import { useNavigate } from 'react-router-dom';

function Jumbotron() {
  const navigate = useNavigate();

  return (
    <div className="jumbotron-container">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <br/>
        <button onClick={() => { navigate('/booking') }}>Reserve Table</button>
      </div>
      <div>
        <img src={Food} alt="Restaurant Food"/>
      </div>
    </div>
  )
}

export default Jumbotron;