// EducationalDetails.js
import React, { useState } from 'react';

const EducationalDetails = ({ onChange }) => {
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  const handleSave = () => {
    onChange({ degree, school, graduationYear });
    alert('Educational Information saved successfully');
  };

  return (
    <div id='first'>
      <h2 id='h2'>Educational Details</h2>
      <label id='label'>
        Degree:
        <input type="text" value={degree} onChange={e => setDegree(e.target.value)} />
      </label>
      <label id='label'>
        College:
        <input type="text" value={school} onChange={e => setSchool(e.target.value)} />
      </label>
      <label id='label'>
        Graduation Year:
        <input type="text" value={graduationYear} onChange={e => setGraduationYear(e.target.value)} />
      </label>
      <button id='button' onClick={handleSave}>Save</button>
    </div>
  );
};

export default EducationalDetails;
