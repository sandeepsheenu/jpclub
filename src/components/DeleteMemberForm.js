// // import React, { useState } from 'react';
// // import { useMutation } from '@apollo/client';
// // import { DELETE_MEMBER } from '../graphql/queries';
// // import '../css/DeleteMemberForm.css'; // Import CSS file for styling

// // function DeleteMemberForm() {
// //   const [id, setId] = useState('');
// //   const [deleteMember] = useMutation(DELETE_MEMBER);

// //   const handleChange = e => {
// //     setId(e.target.value);
// //   };

// //   const handleSubmit = async e => {
// //     e.preventDefault();
// //     try {
// //       await deleteMember({ variables: { id } });
// //       console.log('Member deleted successfully');
// //       setId('');
// //     } catch (error) {
// //       console.error('Error deleting member:', error);
// //     }
// //   };

// //   return (
// //     <div className="delete-member-form">
// //       <h2>Delete Member</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="member-id">Member ID:</label>
// //           <input type="text" id="member-id" value={id} onChange={handleChange} />
// //         </div>
// //         <button type="submit">Delete Member</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default DeleteMemberForm;
// import React, { useState } from 'react';
// import { useMutation, gql } from '@apollo/client';
// import '../css/DeleteMemberForm.css';

// const DELETE_MEMBER_BY_ACCOUNT_NO = gql`
// mutation DeleteMemberByAccountNo($accountNo: String!) {
//   delete_jpnagar_by_pk(AccountNo: $accountNo) {
//     AccountNo
//     Address
//     MemberName
//     MembershipType
//     MobileNo
//   }
// }

// `;

// function DeleteMemberForm() {
//   const [accountNo, setAccountNo] = useState('');
//   const [deleteMemberByAccountNo] = useMutation(DELETE_MEMBER_BY_ACCOUNT_NO);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = e => {
//     setAccountNo(e.target.value);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await deleteMemberByAccountNo({ variables: { accountNo } });

//       console.log('Member data deleted successfully');
//       setAccountNo('');
//     } catch (error) {
//       console.error('Error deleting member data:', error);
//     }
//   };

//   return (
//     <div className="delete-member-form">
//       <h2>Delete Member</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="account-no">Account Number:</label>
//           <input type="text" id="account-no" value={accountNo} onChange={handleChange} />
//         </div>
//         <button type="submit">Delete Member</button>
//       </form>
//     </div>
//   );
// }

// export default DeleteMemberForm;
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import '../css/DeleteMemberForm.css';
import{DELETE_MEMBER_BY_ACCOUNT_NO}  from '../graphql/queries';

// const DELETE_MEMBER_BY_ACCOUNT_NO = gql`
//   mutation DeleteMemberByAccountNo($accountNo: String!) {
//     delete_jpnagar_by_pk(AccountNo: $accountNo) {
//       AccountNo
//       Address
//       MemberName
//       MembershipType
//       MobileNo
//     }
//   }
// `;

function DeleteMemberForm() {
  const [accountNo, setAccountNo] = useState('');
  const [deleteMemberByAccountNo] = useMutation(DELETE_MEMBER_BY_ACCOUNT_NO);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    setAccountNo(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!accountNo.trim()) {
      setErrorMessage('Please enter a value to delete.');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000); // Clear error message after 5 seconds
      return; // Stop further execution if accountNo is not provided
    }
    try {
      const { data } = await deleteMemberByAccountNo({ variables: { accountNo } });
      // eslint-disable-next-line
      if (data.delete_jpnagar_by_pk === null) {
        setErrorMessage('The given account is not in the database.');
        setTimeout(() => {
          setErrorMessage('');
        }, 5000); // Clear error message after 5 seconds
        return;
      }
      setSuccessMessage('Member data deleted successfully');
      setAccountNo('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // Clear success message after 5 seconds
    } catch (error) {
      console.error('Error deleting member data:', error);
      setErrorMessage('Error deleting member data: ' + error.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 5000); // Clear error message after 5 seconds
    }
  };
  

  return (
    <div className="delete-member-form">
      <h2>Delete Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="account-no">Account Number:</label>
          <input type="text" id="account-no" value={accountNo} onChange={handleChange} />
        </div>
        <button type="submit">Delete Member</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default DeleteMemberForm;
