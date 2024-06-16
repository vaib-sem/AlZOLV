import React, { useState, useEffect } from 'react';
import VideoStream from './VideoStream';

const FaceRecognition = () => {
  const [recognizedFaces, setRecognizedFaces] = useState([]);

  const handleFrameCapture = async (frame) => {
    try {
      const response = await fetch('/process_frame', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ frame }),
      });
      const data = await response.json();
      setRecognizedFaces(data.recognized_faces);
    } catch (error) {
      console.error('Error sending frame to backend:', error);
    }
  };

  return (
    <div>
      <div className='mt-12 rounded-lg flex flex-row justify-center'>
      <VideoStream className="rounded-lg" onFrameCapture={handleFrameCapture} />
      </div>
      <div>
        {recognizedFaces.map((face, index) => (
          <p key={index}>{face.name}</p>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
