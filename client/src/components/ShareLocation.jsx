import React, { useState } from 'react';

const ShareLocation = () => {
  const [phone, setPhone] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('/share_location', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    if (result.status === 'success') {
      alert('Location shared successfully!');
      setPhone('');
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="many">
      <div className="oldmonk">
        <div className="head">Share Location</div>
      </div>
      <div className="gin">
        <div className="levelsabkeniklenge">
          <form id="locationForm" onSubmit={handleFormSubmit}>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone Number" 
              required 
            />
            <input type="submit" id="submitLocation" value="Share Location" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShareLocation;
