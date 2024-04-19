import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MEMBER } from '../graphql/queries';
import '../css/AddMemberForm.css'; // Import CSS file for styling

function AddMemberForm() {
  const [formData, setFormData] = useState({
    accountno: '',
    membername: '',
    membershiptype: '',
    mobileno: '',
    address: '',
    emailid: '',
    dob: '',
    Pending_Amount: null
  });
  const [addMember] = useMutation(ADD_MEMBER);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addMember({ variables: { newData: formData } });
      setSuccessMessage('Member added successfully');
      setFormData({
        accountno: '',
        membername: '',
        membershiptype: '',
        mobileno: '',
        address: '',
        emailid: '',
        dob: '',
        Pending_Amount: null
        
      });
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // 5000 milliseconds = 5 seconds
    } catch (error) {
      console.error('Error adding member:', error);
      setErrorMessage('Error adding member: ' + error.message);
      setTimeout(() => {
        setErrorMessage('');
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  };

  return (
    <div className="add-member-form">
      <h2>Add Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="accountno">Member ID:</label>
          <input type="text" id="accountno" name="accountno" value={formData.accountno} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="membershiptype">Membership Type:</label>
          <input type="text" id="membershiptype" name="membershiptype" value={formData.membershiptype} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="membername">Name:</label>
          <input type="text" id="membername" name="membername" value={formData.membername} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mobileno">Phone Number:</label>
          <input type="text" id="mobileno" name="mobileno" value={formData.mobileno} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="emailid">Email:</label>
          <input type="text" id="emailid" name="emailid" value={formData.emailid} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="text" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Pending_Amount">Pending Amount:</label>
          <input type="text" id="Pending_Amount" name="Pending_Amount" value={formData.Pending_Amount} onChange={handleChange} />
        </div>
        <button type="submit">Add Member</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default AddMemberForm;

// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_MEMBER } from '../graphql/queries';
// import '../css/AddMemberForm.css'; // Import CSS file for styling

// function AddMemberForm() {
//   const [formData, setFormData] = useState({
//     accountno: '',
//     MemberName: '',
//     MembershipType: '',
//     MobileNo: '',
//     Address: '',
//     EmailId: '',
//     DOB: '',
//     PendingAmount: null
//   });
//   const [addMember] = useMutation(ADD_MEMBER);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await addMember({ variables: { newData: formData } });
//       setSuccessMessage('Member added successfully');
//       setFormData({
//         accountno: '',
//         MemberName: '',
//         MembershipType: '',
//         MobileNo: '',
//         Address: '',
//         EmailId: '',
//         DOB: '',
//         PendingAmount: null
//       });
//       setTimeout(() => {
//         setSuccessMessage('');
//       }, 5000); // 5000 milliseconds = 5 seconds
//     } catch (error) {
//       console.error('Error adding member:', error);
//       setErrorMessage('Error adding member: ' + error.message);
//       setTimeout(() => {
//         setErrorMessage('');
//       }, 5000); // 5000 milliseconds = 5 seconds
//     }
//   };

//   return (
//     <div className="add-member-form">
//       <h2>Add Member</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="AccountNo">Member ID:</label>
//           <input type="text" id="AccountNo" name="AccountNo" value={formData.accountno} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="MembershipType">Membership Type:</label>
//           <input type="text" id="MembershipType" name="MembershipType" value={formData.MembershipType} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="MemberName">Name:</label>
//           <input type="text" id="MemberName" name="MemberName" value={formData.MemberName} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="MobileNo">Phone Number:</label>
//           <input type="text" id="MobileNo" name="MobileNo" value={formData.Mobileno} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="Address">Address:</label>
//           <input type="text" id="Address" name="Address" value={formData.Address} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="EmailId">Email:</label>
//           <input type="text" id="EmailId" name="EmailId" value={formData.EmailId} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="DOB">Date of Birth:</label>
//           <input type="text" id="DOB" name="DOB" value={formData.DOB} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="PendingAmount">Pending Amount:</label>
//           <input type="text" id="PendingAmount" name="PendingAmount" value={formData.PendingAmount} onChange={handleChange} />
//         </div>
//         <button type="submit">Add Member</button>
//       </form>
//       {successMessage && <p>{successMessage}</p>}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//     </div>
//   );
// }

// export default AddMemberForm;


// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_MEMBER } from '../graphql/queries';
// import '../css/AddMemberForm.css'; // Import CSS file for styling

// function AddMemberForm() {
//   const [formData, setFormData] = useState({});
//   const [addMember] = useMutation(ADD_MEMBER);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await addMember({ variables: { newData: formData } });
//       setSuccessMessage('Member added successfully');
//       setFormData({});
//       setTimeout(() => {
//         setSuccessMessage('');
//       }, 5000); // 5000 milliseconds = 5 seconds
//     } catch (error) {
//       console.error('Error adding member:', error);
//       setErrorMessage('Error adding member: ' + error.message);
//       setTimeout(() => {
//         setErrorMessage('');
//       }, 5000); // 5000 milliseconds = 5 seconds
//     }
//   };
  

//   return (
//     <div className="add-member-form">
//       <h2>Add Member</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="AccountNo">Member ID:</label>
//           <input type="text" id="AccountNo" name="AccountNo" value={formData.AccountNo || ''} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="MembershipType">Membership Type:</label>
//           <input type="text" id="MembershipType" name="MembershipType" value={formData.MembershipType || ''} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="MemberName" name="MemberName" value={formData.MemberName || ''} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="MobileNo">Phone Number:</label>
//           <input type="text" id="MobileNo" name="MobileNo" value={formData.MobileNo || ''} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="Address">Address:</label>
//           <input type="text" id="Address" name="Address" value={formData.Address || ''} onChange={handleChange} />
//         </div>
//         <button type="submit">Add Member</button>
//       </form>
//       {successMessage && <p>{successMessage}</p>}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
      
//     </div>
//   );
// }

// export default AddMemberForm;

