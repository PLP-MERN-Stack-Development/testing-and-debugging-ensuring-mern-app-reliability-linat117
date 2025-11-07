import React from "react";

export default function BugList({ bugs, onDelete, onUpdate }) {
  if (!bugs || bugs.length === 0) {
    return <div>No bugs found.</div>;
  }

  return (
    <ul className="bug-list">
      {bugs.map((bug) => (
        <li key={bug._id} className="bug-item">
          <h4>{bug.title}</h4>
          <p>{bug.description}</p>
          <p>Status: {bug.status}</p>
          <button onClick={() => onUpdate(bug._id, { status: "resolved" })}>
            Mark Resolved
          </button>
          <button onClick={() => onDelete(bug._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
