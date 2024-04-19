import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { FACILITY_LOGS_BY_ACCOUNT } from '../graphql/queries';

function FacilitiesLogs() {
  const [accountNumber, setAccountNumber] = useState('');
  const [getFacilityLogs, { loading, error, data }] = useLazyQuery(FACILITY_LOGS_BY_ACCOUNT);

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleSubmit = () => {
    getFacilityLogs({ variables: { AccountNo: accountNumber } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Facility Logs</h2>
      <div>
        <label htmlFor="accountNumber">Enter Account Number:</label>
        <input
          type="text"
          id="accountNumber"
          value={accountNumber}
          onChange={handleAccountNumberChange}
          placeholder="Account Number"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {data && data.facilitylogs && data.facilitylogs.length > 0 ? (
        <div>
          <h3>Logs for Account Number: {accountNumber}</h3>
          <ul>
            {data.facilitylogs.map((log) => (
              <li key={log.id}>
                <p>Facility Name: {log.FacilityName}</p>
                <p>Action: {log.action}</p>
                <p>Created At: {log.createdAt}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No facility logs found for this account number</p>
      )}
    </div>
  );
}

export default FacilitiesLogs;
