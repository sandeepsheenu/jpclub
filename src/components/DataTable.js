import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_MEMBERS } from '../graphql/queries';
import '../css/DataTable.css'; // Import CSS file for styling



function DataTable() {
  const { loading, error, data } = useQuery(GET_MEMBERS);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      <h2>Member Data</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Address</th>
            <th>Member Name</th>
            <th>Membership Type</th>
            <th>Mobile Number</th>
            
          </tr>
        </thead>
        <tbody>
          {data.jpnagar.map(member => (
            <tr key={member.AccountNo} onClick={() => openModal(member)}>
              <td>{member.AccountNo}</td>
              <td>{member.Address}</td>
              <td>{member.MemberName}</td>
              <td>{member.MembershipType}</td>
              <td>{member.MobileNo}</td>
              
            </tr>

          ))}
        </tbody>
      </table>
      
      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <button className="close-button" onClick={closeModal}>Close</button>
            <h2>Member Details</h2>
            <p>Account Number: {selectedMember.AccountNo}</p>
            <p>Address: {selectedMember.Address}</p>
            <p>Member Name: {selectedMember.MemberName}</p>
            <p>Membership Type: {selectedMember.MembershipType}</p>
            <p>Mobile Number: {selectedMember.MobileNo}</p>
          
          </div>
        </div>
      )}
      
        <ul className="pagination">
  <li><span className="page-link">1</span></li>
  <li><span className="page-link">2</span></li>
  <li><span className="page-link">3</span></li>
  <li><span className="page-link">4</span></li>
  <li><span className="page-link">5</span></li>
  <li><span className="page-link">6</span></li>
  <li><span className="page-link">7</span></li>
  <li><span className="page-link">8</span></li>
  <li><span className="page-link">9</span></li>
  <li><span className="page-link">10</span></li>
</ul>
      
    </div>
  );
}

export default DataTable;
