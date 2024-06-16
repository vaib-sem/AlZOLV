import React from 'react';

const LiveLocationTracker = () => {
  return (
    <div className="doremon">
      <iframe 
        src="https://www.google.com/maps/d/embed?mid=1Nz0EIRrZm29ixMLne4jV0F0DQnU&ehbc=2E312F" 
        width="640" 
        height="480"
        title="Live Location Tracker">
      </iframe>
    </div>
  );
}

export default LiveLocationTracker;
