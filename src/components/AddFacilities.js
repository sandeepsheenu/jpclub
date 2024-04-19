import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FACILITY } from '../graphql/queries';

function AddFacilities() {
  const [formData, setFormData] = useState({ AccountNo: '', FacilityName: '' });
  const [addFacility] = useMutation(ADD_FACILITY);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addFacility({ variables: { AccountNo: formData.AccountNo, FacilityName: formData.FacilityName } });
      setFormData({ AccountNo: '', FacilityName: '' });
    } catch (error) {
      console.error('Error adding facility:', error);
    }
  };

  return (
    <div>
      <h2>Add Facility</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="AccountNo">Account Number:</label>
          <input type="text" id="AccountNo" name="AccountNo" value={formData.AccountNo} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="FacilityName">Facility Name:</label>
          <input type="text" id="FacilityName" name="FacilityName" value={formData.FacilityName} onChange={handleChange} />
        </div>
        <button type="submit">Add Facility</button>
      </form>
    </div>
  );
}

export default AddFacilities;
