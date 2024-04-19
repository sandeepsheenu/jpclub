import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_FACILITY_LOG } from '../graphql/queries';

function UpdateFacilityLogs() {
  const [logID, setLogID] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [action, setAction] = useState('');
  const [updateFacilityLog] = useMutation(UPDATE_FACILITY_LOG);

  const handleSubmit = () => {
    updateFacilityLog({
      variables: {
        logID: parseInt(logID), // Parse to integer
        accountNumber: accountNumber,
        facilityName: facilityName,
        action: action
      }
    });
  };

  return (
    <div>
      <h2>Update Facility Log</h2>
      <div>
        <label htmlFor="logID">Log ID:</label>
        <input
          type="text"
          id="logID"
          value={logID}
          onChange={(e) => setLogID(e.target.value)}
          placeholder="Log ID"
        />
      </div>
      <div>
        <label htmlFor="accountNumber">Account Number:</label>
        <input
          type="text"
          id="accountNumber"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Account Number"
        />
      </div>
      <div>
        <label htmlFor="facilityName">Facility Name:</label>
        <input
          type="text"
          id="facilityName"
          value={facilityName}
          onChange={(e) => setFacilityName(e.target.value)}
          placeholder="Facility Name"
        />
      </div>
      <div>
        <label htmlFor="action">Action:</label>
        <input
          type="text"
          id="action"
          value={action}
          onChange={(e) => setAction(e.target.value)}
          placeholder="Action"
        />
      </div>
      <button onClick={handleSubmit}>Update Log</button>
    </div>
  );
}

export default UpdateFacilityLogs;
