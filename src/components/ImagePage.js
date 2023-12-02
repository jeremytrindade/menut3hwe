import React from 'react';
import { useParams } from 'react-router-dom';

const ImagePage = () => {
    let { id } = useParams(); // Get the image id from the URL parameter

    return (
        <div>
            <h1>Image Page</h1>
            <p>This is the page for image {id}.</p>
            {/* Here you can add more details about the image */}
        </div>
    );
};

export default ImagePage;