import React from 'react';
import ImageCrop from './image-crop.jsx';
import ImageUploader from './image-uploader.jsx';

export const CropContainer = () => (
    <div>
        <ImageUploader />
        <ImageCrop />
    </div>
);
