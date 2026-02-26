import React from 'react';

const Hero = () => {
  const heroStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: 'linear-gradient(to right, #113D30, #115958)',
  };

  return (
    <section style={heroStyle}>
      <div>
        <h1>Gabriela Hanna</h1>
        <p>gregariously gallivanting</p>
      </div>
    </section>
  );
};

export default Hero;
