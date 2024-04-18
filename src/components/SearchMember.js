import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_MEMBERS } from '../graphql/queries';
import '../css/SearchMember.css'; // Import CSS file for styling

function SearchMember() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('AccountNumber');
  const filters = ['AccountNumber', 'MemberName', 'Address', 'MembershipType', 'MobileNumber'];

  const handleChange = e => {
    setSearchCriteria(e.target.value);
  };

  const handleFilterChange = e => { 
    setSelectedFilter(e.target.value);
  };

  const { loading, error, data, refetch } = useQuery(SEARCH_MEMBERS, {
    variables: { filter: selectedFilter, criteria: `%${searchCriteria}%` },
    skip: true, // Skip initial query execution
    onCompleted: () => console.log("Query completed"), // Log when query is completed
    onError: () => console.log("Query error") // Log if there's an error with the query
  });

  const handleSearch = () => {
    refetch(); // Trigger query execution with updated search criteria
    console.log(data);
  };

  useEffect(() => {
    refetch();
  }, [])
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="search-member">
      <h2>Search Members</h2>
      <div className="search-bar">
        <select value={selectedFilter} onChange={handleFilterChange}>
          {filters.map((filter) => (
            <option key={filter} value={filter}>{filter}</option>
          ))}
        </select>
        <input type="text" value={searchCriteria} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {console.log(data)}
        {data?.jpnagar.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Account Number</th>
                <th>Membership Type</th>
                <th>Member Name</th>
                <th>Mobile Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {data.jpnagar_by_pk.map((member) => (
                <tr key={member.AccountNo}>
                  <td>{member.AccountNo}</td>
                  <td>{member.MembershipType}</td> 
                  <td>{member.MemberName}</td>
                  <td>{member.MobileNo}</td>
                  <td>{member.Address}</td>
                  
                                   
                  
                  
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchMember;

// import React, { useState } from 'react';
// import { useLazyQuery } from '@apollo/client';
// import { SEARCH_MEMBERS } from '../graphql/queries'; // Assuming you import gql from here
// import '../css/SearchMember.css'; // Import CSS file for styling

// function SearchMember() {
//   const [searchCriteria, setSearchCriteria] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState('AccountNumber');
//   const filters = ['AccountNumber', 'MemberName', 'Address', 'MembershipType', 'MobileNumber'];

//   const [searchMembers, { loading, error, data }] = useLazyQuery(SEARCH_MEMBERS);

//   const handleChange = e => {
//     setSearchCriteria(e.target.value);
//   };

//   const handleFilterChange = e => {
//     setSelectedFilter(e.target.value);
//   };

//   const handleSearch = () => {
//     if (selectedFilter === 'AccountNumber') {
//       // For AccountNumber filter, perform regex search
//       searchMembers({ variables: { regex: `^${searchCriteria}` } });
//     } else {
//       // For other filters, use simple string match
//       searchMembers({ variables: { regex: '', filter: selectedFilter, criteria: `%${searchCriteria}%` } });
//     }
//   };

//   return (
//     <div className="search-member">
//       <h2>Search Members</h2>
//       <div className="search-bar">
//         <select value={selectedFilter} onChange={handleFilterChange}>
//           {filters.map((filter) => (
//             <option key={filter} value={filter}>{filter}</option>
//           ))}
//         </select>
//         <input type="text" value={searchCriteria} onChange={handleChange} />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div>
//         {loading && <p>Loading...</p>}
//         {error && <p>Error: {error.message}</p>}
//         {data && data.jpnagar.length > 0 ? (
//           <table>
//             <thead>
//               <tr>
//                 <th>Account Number</th>
//                 <th>Membership Type</th>
//                 <th>Member Name</th>
//                 <th>Mobile Number</th>
//                 <th>Address</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.jpnagar.map((member) => (
//                 <tr key={member.AccountNo}>
//                   <td>{member.AccountNo}</td>
//                   <td>{member.MembershipType}</td> 
//                   <td>{member.MemberName}</td>
//                   <td>{member.MobileNo || 'N/A'}</td>
//                   <td>{member.Address}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No results found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchMember;
