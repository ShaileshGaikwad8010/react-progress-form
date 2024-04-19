import React, { useState } from 'react';

const AddressDetails = ({ onChange }) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSave = () => {
    onChange({ address, city, zipCode });
    alert('Adress Information saved successfully');
  };

  return (
    <div id='first'>
      <h2 id='h2'>Address Details</h2>
      <label id='label'>
        Address:
        <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <label id='label'>
        City:
        <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      </label>
      <label id='label'>
        Zip Code:
        <input type="text" value={zipCode} onChange={e => setZipCode(e.target.value)} />
      </label>
      <button id='button' onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddressDetails;
