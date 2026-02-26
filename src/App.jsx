import React from 'react';
import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import PhotoGallery from './components/PhotoGallery';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

function App() {
  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '1rem',
    background: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    zIndex: 100,
  };

  const navLinkStyle = {
    margin: '0 1rem',
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <>
      <main>
        <Hero />
        <About />
        {/* <Projects /> */}
        {/* <PhotoGallery /> */}
        {/* <Hobbies /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
