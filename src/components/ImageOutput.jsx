import React from 'react';

const ImageOutput = ({ imageFile }) => {
    return(
        <div className='image'>
            <img src={imageFile}/>
        </div>
    );
 }

export default ImageOutput; 