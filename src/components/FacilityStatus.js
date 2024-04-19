import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FACILITY_USAGE_STATUS } from '../graphql/queries';

function Facility() {
  const [facilityNameInput, setFacilityNameInput] = useState('');
  const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(); // Add one day to current date
  const { loading, error, data, refetch } = useQuery(GET_FACILITY_USAGE_STATUS, {
    variables: { 
      FacilityName: facilityNameInput,
      currentDate: new Date().toISOString(),
      nextDay: nextDay
    },
  });

  const handleSearch = () => {
    refetch({ FacilityName: facilityNameInput });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const facilityLogs = data.facilitylogs || [];

  return (
    <div>
      <h2>Facility Status</h2>
      <div>
        <label htmlFor="facilityName">Enter Facility Name:</label>
        <input
          type="text"
          id="facilityName"
          value={facilityNameInput}
          onChange={(e) => setFacilityNameInput(e.target.value)}
          placeholder="Facility Name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {facilityLogs.length > 0 ? (
        <div>
          <h3>Status for Facility: {facilityNameInput}</h3>
          <ul>
            {facilityLogs.map((log) => (
              <li key={log.id}>
                <p>Account Number: {log.AccountNo}</p>
                <p>Action: {log.action}</p>
                <p>Created At: {log.createdAt}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No facility usage found for today</p>
      )}
    </div>
  );
}

export default Facility;
