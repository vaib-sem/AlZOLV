import React, { useRef, useEffect } from 'react';

const VideoStream = ({ onFrameCapture }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = {
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => console.error('Error accessing media devices.', err));
  }, []);

  useEffect(() => {
    const captureFrame = () => {
      if (videoRef.current && videoRef.current.readyState === 4) {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const frame = canvas.toDataURL('image/jpeg');
        onFrameCapture(frame);
      }
      requestAnimationFrame(captureFrame);
    };

    captureFrame();
  }, [onFrameCapture]);

  return <video ref={videoRef} style={{ width: '50%', height: 'auto', borderRadius: '7%' }} />;
};

export default VideoStream;
