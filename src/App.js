import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DataTable from './components/DataTable';
import AddMemberForm from './components/AddMemberForm';
import DeleteMemberForm from './components/DeleteMemberForm';
import SearchMember from './components/SearchMember';
import Dashboard from './components/Dashboard';
import './css/sidebar.css'; // Import the CSS file
import logo from './assets/logo.jpg';
import ImageUploader from './components/image';
import ImageList from './components/image_featching';
import UploadMultipleImages from './components/multipleimages';


const client = new ApolloClient({
  uri: 'http://192.168.225.103:8080/v1/graphql',  
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

      default:
        return < Dashboard />;
    }
  };

  return (
    <ApolloProvider client={client}>
      <div>
          { <img src={logo} alt="Logo" className="logo" />}
        <h1>jp nagar club</h1>

        <div className="flex-container">
          <div className="sidebar">
            <button onClick={() => setCurrentPage('Dashboard')}>Dashboard</button>
            <button onClick={() => setCurrentPage('SearchMember')}>Search Member</button>
            <button onClick={() => setCurrentPage('upload')}>upload</button>
            <button onClick={() => setCurrentPage('AddMemberForm')}>Add Member</button>
            <button onClick={() => setCurrentPage('DataTable')}>Member Data</button>
            <button onClick={() => setCurrentPage('imagefeatch')}>image featch</button>
            <button onClick={() => setCurrentPage('multiple_image')}>multiple_image</button>

          
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
