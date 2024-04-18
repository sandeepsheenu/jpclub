import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_IMAGES_BY_ACCOUNT_NO } from '../graphql/queries'; // Assuming GET_IMAGES_BY_ACCOUNT_NO is defined in this file

function ImageList() {
  const [accountNo, setAccountNo] = useState('');
  const [fetchImages, { loading, data, error }] = useLazyQuery(GET_IMAGES_BY_ACCOUNT_NO);

  const handleAccountNoChange = (e) => {
    setAccountNo(e.target.value);
  };

  const handleFetchImages = () => {
    fetchImages({ variables: { account_no: accountNo } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <input type="text" value={accountNo} onChange={handleAccountNoChange} placeholder="Enter account number" />
      <button onClick={handleFetchImages}>Fetch Images</button>
      {data && data.images && (
        <div>
          {data.images.map((image, index) => (
            <div key={index}>
              <img src={`data:image/png;base64,${image.image_base64}`} alt={`Image for account ${image.account_no}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageList;
