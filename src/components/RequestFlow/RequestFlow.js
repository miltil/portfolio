import React from 'react';
import './RequestFlow.css';

const RequestFlow = ({ currentPage, totalPages }) => {
  const circles = [];
  for (let i = 1; i <= totalPages; i++) {
    circles.push(
      <div key={i} className={`circle ${i <= currentPage ? 'filled' : ''}`} />
    );
  }

  const lines = [];
  for (let i = 1; i < totalPages; i++) {
    lines.push(<div key={i} className="line" />);
  }

  return (
    <div className="progress-container">
      {circles.map((circle, index) => (
        <React.Fragment key={index}>
          {circle}
          {index !== circles.length - 1 && lines[index]}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RequestFlow;