import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { INSERT_IMAGES_MUTATION } from '../graphql/queries'; // Assuming INSERT_IMAGES_MUTATION is defined in this file

function UploadMultipleImages() {
  const [images, setImages] = useState([]);
  const [insertImages] = useMutation(INSERT_IMAGES_MUTATION);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleImageUpload = async () => {
    if (images.length === 0) {
      console.error('No images selected.');
      return;
    }

    const imageObjects = images.map((image) => {
      const filename = image.name;
      const accountNo = filename.replace(/\.[^/.]+$/, ''); // Remove file extension
      const reader = new FileReader();
      reader.readAsDataURL(image); // Read image as data URL
      return new Promise((resolve, reject) => {
        reader.onload = () => {
          const imageBase64 = reader.result.split(',')[1]; // Get base64 string
          resolve({ account_no: accountNo, image_base64: imageBase64 });
        };
        reader.onerror = reject;
      });
    });

    try {
      const imagesData = await Promise.all(imageObjects);
      await insertImages({
        variables: { images: imagesData },
      });
      alert('Images uploaded successfully!');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} multiple />
      <button onClick={handleImageUpload}>Upload</button>
    </div>
  );
}

export default UploadMultipleImages;
