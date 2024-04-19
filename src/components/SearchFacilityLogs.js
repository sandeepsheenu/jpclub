import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FACILITY_LOGS_BY_ACCOUNT } from '../graphql/queries';

function SearchFacilityLogs() {
  const [accountNumber, setAccountNumber] = useState('');
  const { loading, error, data } = useQuery(FACILITY_LOGS_BY_ACCOUNT, {
    variables: {
      accountNumber: accountNumber
    }
  });

  const handleSearch = () => {
    // Trigger search here
  };

  return (
    <div>
      <h2>Search Facility Logs by Account Number</h2>
      <div>
        <label htmlFor="accountNumber">Account Number:</label>
        <input
          type="text"
          id="accountNumber"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Account Number"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error.message}</p> : null}
      {data && data.facilitylogs ? (
        <div>
          <h3>Facility Logs for Account Number: {accountNumber}</h3>
          <ul>
            {data.facilitylogs.map((log) => (
              <li key={log.LogID}>
                <p>Log ID: {log.LogID}</p>
                <p>Facility Name: {log.FacilityName}</p>
                <p>Action: {log.Action}</p>
                <p>Created At: {log.CreatedAt}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default SearchFacilityLogs;
