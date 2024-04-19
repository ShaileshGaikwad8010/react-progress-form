import React, { useState } from 'react';

const Dashboard = ({ formDataList }) => {
  const [dataList, setDataList] = useState(formDataList);

  const handleDelete = (index) => {
    const updatedDataList = [...dataList];
    updatedDataList.splice(index, 1);
    setDataList(updatedDataList);
    localStorage.setItem('formDataList', JSON.stringify(updatedDataList));
  };

  return (
    <div id='dashboard'>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>Zip Code</th>
            <th>Degree</th>
            <th>School</th>
            <th>Graduation Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((formData, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {formData.personalDetails.profilePhoto && (
                  <img
                    src={formData.personalDetails.profilePhoto}
                    alt={`Profile ${index + 1}`}
                    style={{ maxWidth: '50px' }}
                  />
                )}
              </td>
              <td>{formData.personalDetails.firstName}</td>
              <td>{formData.personalDetails.lastName}</td>
              <td>{formData.personalDetails.email}</td>
              <td>{formData.addressDetails.address}</td>
              <td>{formData.addressDetails.city}</td>
              <td>{formData.addressDetails.zipCode}</td>
              <td>{formData.educationalDetails.degree}</td>
              <td>{formData.educationalDetails.school}</td>
              <td>{formData.educationalDetails.graduationYear}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
