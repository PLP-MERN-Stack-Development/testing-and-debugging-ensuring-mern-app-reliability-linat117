import React from "react";

export default function BugList({ bugs, onDelete, onUpdate }) {
  if (!bugs || bugs.length === 0) return <div>No bugs</div>;
  return (
    <ul>
      {bugs.map((b) => (
        <li key={b._id}>
          <h4>{b.title}</h4>
          <p>{b.description}</p>
          <p>Status: {b.status}</p>
          <button onClick={() => onUpdate(b._id, { status: "resolved" })}>
            Resolve
          </button>
          <button onClick={() => onDelete(b._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
