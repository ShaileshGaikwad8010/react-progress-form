// PersonalDetails.js
import React, { useState } from 'react';
import './PersonalDetails.css';

const PersonalDetails = ({ onChange }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null); // Add state for profile photo

  const handleSave = () => {
    onChange({ firstName, lastName, email, profilePhoto }); // Include profile photo in formData
    alert('personal Information saved successfully');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result); // Store profile photo as base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id='first'>
      <h2 id='h2'>Personal Details</h2>
      <label id='label'>
        First Name:
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <label id='label'>
        Last Name:
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <label id='label'>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label id='label'>
        Profile Photo: {/* Input field for profile photo */}
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      <button id='button' onClick={handleSave}>Save</button>
    </div>
  );
};

export default PersonalDetails;
