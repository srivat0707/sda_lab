import React, { useState } from 'react';
import './one.css';

function SeatingPlan() {
  const numRows = 5; 
  const numSeatsPerRow = 8; 
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  const isSeatSelected = (seat) => {
    return seat === selectedSeat;
  };

  const renderSeats = () => {
    const seats = [];

    for (let row = 1; row <= numRows; row++) {
      for (let seat = 1; seat <= numSeatsPerRow; seat++) {
        const seatNumber = `${row}-${seat}`;
        const isSelected = isSeatSelected(seatNumber);
        seats.push(
          <div
            key={seatNumber}
            className={`seat ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
    }
    return seats;
  };

  return (
    <div className="app">
      <h2>Matrix of Seats</h2>
      <div className="seat-matrix">{renderSeats()}</div>
      {selectedSeat && (
        <p>Selected Seat: {selectedSeat}</p>
      )}
    </div>
  );
}

export default SeatingPlan;