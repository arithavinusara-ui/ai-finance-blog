'use client';
import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('සාර්ථකව සබ්ස්ක්‍රයිබ් විය!');
      setEmail('');
    } else {
      setMessage(data.error || 'දෝෂයක් සිදු විය.');
    }
  };

  return (
    <form onSubmit={handleSubscribe} style={{ margin: '20px 0' }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ඔබේ ඊමේල් ලිපිනය..."
        required
        style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Subscribe
      </button>
      
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </form>
  );
}