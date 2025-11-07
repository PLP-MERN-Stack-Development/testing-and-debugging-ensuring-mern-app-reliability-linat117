import React, { useState } from "react";

export default function BugForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }
    try {
      setError(null);
      await onCreate({ title, description: desc });
      setTitle("");
      setDesc("");
    } catch (err) {
      setError("Failed to create bug");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bug-form">
      {error && (
        <div role="alert" className="error">
          {error}
        </div>
      )}
      <input
        aria-label="title"
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        aria-label="description"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit">Report Bug</button>
    </form>
  );
}
