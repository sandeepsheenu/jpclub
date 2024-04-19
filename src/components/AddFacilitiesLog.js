import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FACILITY_LOG } from '../graphql/queries';

function AddFacilitiesLog() {
  const [formData, setFormData] = useState({ AccountNo: '', FacilityName: '', action: '' });
  const [addFacilityLog] = useMutation(ADD_FACILITY_LOG);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addFacilityLog({ variables: { AccountNo: formData.AccountNo, FacilityName: formData.FacilityName, action: formData.action } });
      setFormData({ AccountNo: '', FacilityName: '', action: '' });
    } catch (error) {
      console.error('Error logging facility usage:', error);
    }
  };

  return (
    <div>
      <h2>Log Facility Usage</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="AccountNo">Account Number:</label>
          <input type="text" id="AccountNo" name="AccountNo" value={formData.AccountNo} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="FacilityName">Facility Name:</label>
          <input type="text" id="FacilityName" name="FacilityName" value={formData.FacilityName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="action">Action:</label>
          <input type="text" id="action" name="action" value={formData.action} onChange={handleChange} />
        </div>
        <button type="submit">Log Facility Usage</button>
      </form>
    </div>
  );
}

export default AddFacilitiesLog;
