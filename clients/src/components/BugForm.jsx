import React, { useState } from 'react';

export default function BugForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    if (title.trim().length < 3) {
      setError('Title must be at least 3 characters');
      return;
    }
    setError(null);
    await onCreate({ title, description: desc });
    setTitle(''); setDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div role="alert">{error}</div>}
      <input aria-label="title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea aria-label="description" value={desc} onChange={e => setDesc(e.target.value)} />
      <button type="submit">Report Bug</button>
    </form>
  );
}
