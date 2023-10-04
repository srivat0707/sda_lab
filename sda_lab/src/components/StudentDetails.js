import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDetails = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const history = useNavigate();

  const handleSubmit = () => {
    // Redirect to the seating plan page with the entered registration number
    history.push(`/seating-plan/${registrationNumber}`);
  };

  return (
    <div>
      <h1>Student Details</h1>
      <input
        type="text"
        placeholder="Enter Registration Number"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StudentDetails;