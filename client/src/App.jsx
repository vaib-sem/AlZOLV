import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FaceRecognition, Home, LiveLocationTracker, Login, Navbar, ShareLocation, Signup } from './components';


function App() {
  return (
    <Router>
      <div className="bg-[#4A4D6D] h-screen">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/home"  element={<Home/>} />
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/signin" exact element={<Login/>} />
          <Route path="/faceRec"  element={<FaceRecognition/>} />
          <Route path="/location"  element={<LiveLocationTracker/>} />
          <Route path="/share-location"  element={<ShareLocation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
