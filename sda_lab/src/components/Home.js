import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/seating-plan/:registrationNumber">
        <button>Check Seating Plan (Logged In Student)</button>
      </Link>
      <Link to="/student-details">
        <button>Check Seating Plan (Different Registration Number)</button>
      </Link>
    </div>
  );
};

export default Home;