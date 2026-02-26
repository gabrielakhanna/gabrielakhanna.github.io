import React from 'react';

const Footer = () => {
  const footerStyle = {
    padding: '1rem',
    textAlign: 'center',
    background: 'black',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Gabriela Hanna. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
