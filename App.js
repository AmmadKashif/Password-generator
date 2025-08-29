import React from 'react';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>🔐 Splashy Password Generator</h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
