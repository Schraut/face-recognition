import React from 'react';
// Styles
import './image-link-form.styles.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">{'Add an image to detect faces.'}</p>
      <div className="center">
        <div className="form">
          <input className="" type="text" />
          <button className="button">Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
