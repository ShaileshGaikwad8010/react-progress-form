import React, { useState, useEffect } from 'react';
import PersonalDetails from './components/PersonalDetails';
import AddressDetails from './components/AddressDetails';
import EducationalDetails from './components/EducationalDetails';
import Preview from './components/Preview';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dashboard from './components/Dashboard';

const steps = ['Personal Details', 'Address Details', 'Educational Details', 'Preview'];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    personalDetails: {},
    addressDetails: {},
    educationalDetails: {},
  });

  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    // Retrieve form data list from local storage when the component mounts
    const storedDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
    setFormDataList(storedDataList);
  }, []);

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleChange = (data, stepName) => {
    setFormData(prevData => ({
      ...prevData,
      [stepName]: {
        ...prevData[stepName],
        ...data
      },
    }));
  };

  const handleSubmit = () => {
    // Check if all form fields are filled
    const isFormFilled = Object.values(formData).every(field => Object.keys(field).length !== 0);
    if (isFormFilled) {
      // Add current form data to the list
      const newDataList = [...formDataList, formData];
      setFormDataList(newDataList);
      // Clear current form data
      setFormData({
        personalDetails: {},
        addressDetails: {},
        educationalDetails: {},
      });
      // Reset step to the first one
      setStep(0);
      // Save updated form data list to local storage
      localStorage.setItem('formDataList', JSON.stringify(newDataList));
    } else {
      // If any field is empty, alert the user to fill all fields
      alert('Please fill in all fields before submitting.');
    }
  };

  useEffect(() => {
    const storedDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
    setFormDataList(storedDataList);
  }, []);

  const percentageCompleted = Math.round(((step + 1) / 3) * 100);

  return (
    <div className='first1'>
      {step !== 'dashboard' && (
        <>
          <h2 className='h21'>Multi-Step Form</h2>
          <div className='h21'>Step {step + 1} of {steps.length}</div>
          <ul id="progressbar">
        {steps.map((stepName, index) => (
          <li
          key={index}
          id={`step${index + 1}`}
          className={step >= index ? 'active' : ''} // Set active class up to the current step
        >
          <strong>{stepName}</strong>
        </li>
        ))}
      </ul>
        </>
      )}
      {step === 0 && <PersonalDetails onChange={data => handleChange(data, 'personalDetails')} />}
      {step === 1 && <AddressDetails onChange={data => handleChange(data, 'addressDetails')} />}
      {step === 2 && <EducationalDetails onChange={data => handleChange(data, 'educationalDetails')} />}
      {step === 3 && <Preview formData={formData} />}
      <div className='btn'>
        {step > 0 && <button id='button' className='bt1' onClick={handlePrevious}>Previous</button>}
        {step < steps.length - 1 && <button id='button' className='bt1' onClick={handleNext}>Next</button>}
        {step === steps.length - 1 && <button id='button' className='bt1' onClick={handleSubmit}>Submit</button>}
      </div>
      {step !== 'dashboard' && <button id='button' className='bt2' onClick={() => setStep('dashboard')}>Dashboard</button>} {/* Change step to 'dashboard' */}
      {step === 'dashboard' && <Dashboard formDataList={formDataList} />}
    </div>
  );
};

export default MultiStepForm;
