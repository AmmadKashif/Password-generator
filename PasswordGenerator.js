import React, { useState } from 'react';

function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeLetters) charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!charset) {
      setPassword('⚠️ Select at least one option');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
      newPassword += randomChar;
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('✅ Password copied!');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'left', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>🔐 Splashy Password Generator</h2>

      <label>
        <input
          type="checkbox"
          checked={includeLetters}
          onChange={() => setIncludeLetters(!includeLetters)}
        />
        Letters (A–Z, a–z)
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        Numbers (0–9)
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        Symbols (!@#$...)
      </label>
      <br />

      <label style={{ display: 'block', marginTop: '15px' }}>
        Length: {length}
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </label>

      <button
        onClick={generatePassword}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Generate Password
      </button>

      {password && (
        <div style={{ marginTop: '20px', wordBreak: 'break-word' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{password}</p>
          {password !== '⚠️ Select at least one option' && (
            <button
              onClick={copyToClipboard}
              style={{
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Copy to Clipboard
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;
