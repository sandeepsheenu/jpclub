import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DataTable from './components/DataTable';
import AddMemberForm from './components/AddMemberForm';
import DeleteMemberForm from './components/DeleteMemberForm';
import SearchMember from './components/SearchMember';
import Dashboard from './components/Dashboard';
import './css/sidebar.css'; // Import the CSS file
import logo from './assets/img_j_p_nagar_cultu.png';
import ImageUploader from './components/image';
import ImageList from './components/image_featching';
import UploadMultipleImages from './components/multipleimages';
import YourComponent from './components/addvoters';
import AddFacilities from './components/AddFacilities'; // New component for adding facilities
import AddFacilitiesLog from './components/AddFacilitiesLog'; // New component for logging facility usage
import FacilitiesLog from './components/FacilitiesLog'; // New component for displaying facility logs
import FacilityStatus from './components/FacilityStatus';
import UpdateFacilityLogs from './components/updateFacilitiyLogs' // Import UpdateFacilityLogs component
import SearchFacilityLogs from './components/SearchFacilityLogs'; // Import SearchFacilityLogs component




const client = new ApolloClient({
  uri: 'http://192.168.225.100:8080/v1/graphql',  
  cache: new InMemoryCache()
});

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard'); // Default page

  const renderPage = () => {
    switch (currentPage) {
      case 'AddMemberForm':
        return <AddMemberForm />;
      case 'DeleteMemberForm':
        return <DeleteMemberForm />;
      case 'DataTable':
        return <DataTable />;
      case 'SearchMember':
          return <SearchMember />;
      case 'upload':
        return <ImageUploader />; 
      case 'imagefeatch':
        return <ImageList />;

      case 'multiple_image':
        return <UploadMultipleImages/>;

      case 'add_voters':
        return <YourComponent/>; 
      case 'AddFacilities':
        return <AddFacilities />;
      case 'AddFacilitiesLog':
        return <AddFacilitiesLog />;
      case 'FacilitiesLog':
        return <FacilitiesLog />;
      case 'FacilityStatus':
        return <FacilityStatus/>;
      case 'UpdateFacilityLogs':
        return <UpdateFacilityLogs />;
      case 'SearchFacilityLogs':
        return <SearchFacilityLogs />   ; 
        
      
      default:
        return < Dashboard />;
    }
  };

  return (
    <ApolloProvider client={client}>
      <div>
      <div className="container">
      <div className="logo">
        <img src={logo}  />
      </div>
      <div className="title">
        <h1> JP Nagar Club Members Management</h1>
      </div>
    </div>


        <div className="flex-container">
          <div className="sidebar">
            <button onClick={() => setCurrentPage('Dashboard')}>Dashboard</button>
            <button onClick={() => setCurrentPage('SearchMember')}>Search Member</button>
            <button onClick={() => setCurrentPage('upload')}>upload</button>
            <button onClick={() => setCurrentPage('AddMemberForm')}>Add Member</button>
            <button onClick={() => setCurrentPage('DataTable')}>Member Data</button>
            <button onClick={() => setCurrentPage('imagefeatch')}>image featch</button>
            <button onClick={() => setCurrentPage('multiple_image')}>multiple_image</button>
            <button onClick={() => setCurrentPage('add_voters')}>add voters</button>
            <button onClick={() => setCurrentPage('AddFacilities')}>Add Facilities</button>
            <button onClick={() => setCurrentPage('AddFacilitiesLog')}>Add Facilities Log</button>
            <button onClick={() => setCurrentPage('FacilitiesLog')}>Facilities Log</button>
            <button onClick={() => setCurrentPage('FacilityStatus')}>Facility Status </button>
            <button onClick={() => setCurrentPage('UpdateFacilityLogs')}>Update facility logs </button>
            <button onClick={() => setCurrentPage('SearchFacilityLogs')}>Search facility logs </button>

          
            <button onClick={() => setCurrentPage('DeleteMemberForm')}>Delete Member</button>
          </div>
          <div className="main-content">
            {renderPage()}
          </div>
        </div>
        {/* Footer */}-
        <footer className='footer_down'>
          Designed & Developed by <a href="https://rscsys.com/">RSC SYSTEMS PVT LTD</a> 
        </footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
