import React, { useState } from 'react';
import { photos } from '../data/photos';
import PhotoCard from './PhotoCard';
import SearchBar from './SearchBar';

const PhotoGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhotos = photos.filter(photo => {
    const searchText = searchTerm.toLowerCase();
    return (
      photo.title.toLowerCase().includes(searchText) ||
      photo.trip.toLowerCase().includes(searchText) ||
      photo.tags.some(tag => tag.toLowerCase().includes(searchText))
    );
  });

  return (
    <section id="photo-gallery" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h2>Travel Photography</h2>
      <SearchBar onSearch={setSearchTerm} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        {filteredPhotos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
