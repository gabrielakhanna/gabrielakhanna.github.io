import React from 'react';

const PhotoCard = ({ photo }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  };

  return (
    <div style={cardStyle}>
      <img src={photo.url} alt={photo.title} style={imageStyle} />
      <h3>{photo.title}</h3>
      <p><em>{photo.trip}</em></p>
    </div>
  );
};

export default PhotoCard;
