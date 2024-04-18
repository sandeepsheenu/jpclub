
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MEMBER } from '../graphql/queries';
import '../css/AddMemberForm.css'; // Import CSS file for styling

function AddMemberForm() {
  const [formData, setFormData] = useState({});
  const [addMember] = useMutation(ADD_MEMBER);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addMember({ variables: { newData: formData } });
      setSuccessMessage('Member added successfully');
      setFormData({});
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // 5000 milliseconds = 5 seconds
    } catch (error) {
      console.error('Error adding member:', error);
      setErrorMessage('Error adding member: ' + error.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  };
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     await addMember({ variables: { newData: formData } });
  //     setSuccessMessage('Member added successfully');
  //     setFormData({});
  //   } catch (error) {
  //     console.error('Error adding member:', error);
  //   }
  // };

  return (
    <div className="add-member-form">
      <h2>Add Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="AccountNo">Member ID:</label>
          <input type="text" id="AccountNo" name="AccountNo" value={formData.AccountNo || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="MembershipType">Membership Type:</label>
          <input type="text" id="MembershipType" name="MembershipType" value={formData.MembershipType || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="MemberName" name="MemberName" value={formData.MemberName || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="MobileNo">Phone Number:</label>
          <input type="text" id="MobileNo" name="MobileNo" value={formData.MobileNo || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Address">Address:</label>
          <input type="text" id="Address" name="Address" value={formData.Address || ''} onChange={handleChange} />
        </div>
        <button type="submit">Add Member</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
    </div>
  );
}

export default AddMemberForm;

