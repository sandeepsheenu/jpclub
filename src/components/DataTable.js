import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client'; // Import gql from @apollo/client
import '../css/DataTable.css'; // Import CSS file for styling

const GET_MEMBERS = gql`
  query MyQuery {
    jpnagar {
      accountno
      address
      dob
      emailid
      membername
      membershiptype
      mobileno
      photos
    }
  }
`;

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
            <th>emailid</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
              {data.jpnagar.map((member) => (
                <tr key={member.accountno} onClick={() => openModal(member)}>
                  <td>{member.accountno}</td>
                  <td>{member.address}</td>
                  <td>{member.membername}</td>
                  <td>{member.membershiptype}</td>
                  <td>{member.mobileno}</td>
                  <td>{member.emailid}</td>
                  <td>{member.dob}</td>
                </tr>
              ))}
            </tbody>

      </table>

      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <h2>Member Details</h2>
            <p>Account Number: {selectedMember.accountno}</p>
            <p>Address: {selectedMember.address}</p>
            <p>Member Name: {selectedMember.membername}</p>
            <p>Membership Type: {selectedMember.membershiptype}</p>
            <p>Mobile Number: {selectedMember.mobileno}</p>
          </div>
        </div>
      )}

      {/* Pagination can be added here */}
    </div>
  );
}

export default DataTable;



// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_MEMBERS } from '../graphql/queries';
// import '../css/DataTable.css'; // Import CSS file for styling



// function DataTable() {
//   const { loading, error, data } = useQuery(GET_MEMBERS);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const openModal = (member) => {
//     setSelectedMember(member);
//   };

//   const closeModal = () => {
//     setSelectedMember(null);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :</p>;

//   return (
//     <div>
//       <h2>Member Data</h2>
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>Account Number</th>
//             <th>Address</th>
//             <th>Member Name</th>
//             <th>Membership Type</th>
//             <th>Mobile Number</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {data.jpnagar.map(member => (
//             <tr key={member.AccountNo} onClick={() => openModal(member)}>
//               <td>{member.AccountNo}</td>
//               <td>{member.Address}</td>
//               <td>{member.MemberName}</td>
//               <td>{member.MembershipType}</td>
//               <td>{member.MobileNo}</td>
              
//             </tr>

//           ))}
//         </tbody>
//       </table>
      
//       {selectedMember && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal">
//             <button className="close-button" onClick={closeModal}>Close</button>
//             <h2>Member Details</h2>
//             <p>Account Number: {selectedMember.AccountNo}</p>
//             <p>Address: {selectedMember.Address}</p>
//             <p>Member Name: {selectedMember.MemberName}</p>
//             <p>Membership Type: {selectedMember.MembershipType}</p>
//             <p>Mobile Number: {selectedMember.MobileNo}</p>
          
//           </div>
//         </div>
//       )}
      
//         <ul className="pagination">
//   <li><span className="page-link">1</span></li>
//   <li><span className="page-link">2</span></li>
//   <li><span className="page-link">3</span></li>
//   <li><span className="page-link">4</span></li>
//   <li><span className="page-link">5</span></li>
//   <li><span className="page-link">6</span></li>
//   <li><span className="page-link">7</span></li>
//   <li><span className="page-link">8</span></li>
//   <li><span className="page-link">9</span></li>
//   <li><span className="page-link">10</span></li>
// </ul>
      
//     </div>
//   );
// }

// export default DataTable;
