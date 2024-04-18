import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { INSERT_IMAGE_MUTATION } from '../graphql/queries'; // Assuming INSERT_IMAGE_MUTATION is defined in this file

function UploadImage() {
  const [image, setImage] = useState(null);
  const [insertImage] = useMutation(INSERT_IMAGE_MUTATION);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!image) {
      console.error('Image is missing.');
      return;
    }

    // Extract filename from image
    const filename = image.name;
    const accountNo = filename.replace(/\.[^/.]+$/, ''); // Remove file extension

    const reader = new FileReader();
    reader.readAsDataURL(image); // Read image as data URL
    reader.onloadend = async () => {
      const imageBase64 = reader.result.split(',')[1]; // Get base64 string
      try {
        await insertImage({
          variables: { image_base64: imageBase64, account_no: accountNo },
        });
        alert('Image uploaded successfully!');
      } catch (err) {
        console.error('Error uploading image:', err);
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload</button>
    </div>
  );
}

export default UploadImage;


