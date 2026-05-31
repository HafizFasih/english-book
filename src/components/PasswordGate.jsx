import React, { useState } from 'react';

const CORRECT_PASSWORD = 'admin123';

export default function PasswordGate({ children }) {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (unlocked) {
    return (
      <div>
        <div style={{
          background: '#e8f5e9',
          border: '1px solid #4caf50',
          borderRadius: '8px',
          padding: '10px 16px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.9rem',
          color: '#2e7d32',
        }}>
          ✅ <strong>Answer Key Unlocked</strong>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div style={{
      border: '2px dashed #ccc',
      borderRadius: '12px',
      padding: '2.5rem',
      textAlign: 'center',
      margin: '2rem 0',
      background: 'var(--ifm-card-background-color)',
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔒</div>
      <h3 style={{ marginBottom: '0.25rem' }}>Answer Key — Password Protected</h3>
      <p style={{ color: 'var(--ifm-color-secondary-darkest)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Enter the password to view model answers for this practice paper.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter password"
          autoComplete="off"
          style={{
            padding: '0.6rem 1rem',
            borderRadius: '6px',
            border: error ? '2px solid #e53935' : '1px solid #ccc',
            fontSize: '1rem',
            outline: 'none',
            minWidth: '200px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.6rem 1.4rem',
            borderRadius: '6px',
            background: '#2e7d32',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
          }}
        >
          Unlock
        </button>
      </form>
      {error && (
        <p style={{ color: '#e53935', marginTop: '0.75rem', fontSize: '0.9rem' }}>
          ❌ Incorrect password. Please try again.
        </p>
      )}
    </div>
  );
}
