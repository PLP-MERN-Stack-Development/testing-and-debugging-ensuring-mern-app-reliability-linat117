import React, { useEffect, useState } from "react";
import axios from "axios";
import BugForm from "./components/BugForm";
import BugList from "./components/BugList";
import ErrorBoundary from "./components/ErrorBoundary";

const API = "http://localhost:5000/api/bugs"; // change if needed

export default function App() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBugs = async () => {
    try {
      const res = await axios.get(API);
      setBugs(res.data);
    } catch (err) {
      console.error("Error fetching bugs:", err);
    } finally {
      setLoading(false);
    }
  };

  const createBug = async (bug) => {
    const res = await axios.post(API, bug);
    setBugs([res.data, ...bugs]);
  };

  const deleteBug = async (id) => {
    await axios.delete(`${API}/${id}`);
    setBugs(bugs.filter((b) => b._id !== id));
  };

  const updateBug = async (id, data) => {
    const res = await axios.put(`${API}/${id}`, data);
    setBugs(bugs.map((b) => (b._id === id ? res.data : b)));
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ErrorBoundary>
      <div className="container">
        <h1>🐞 Bug Tracker</h1>
        <BugForm onCreate={createBug} />
        <BugList bugs={bugs} onDelete={deleteBug} onUpdate={updateBug} />
      </div>
    </ErrorBoundary>
  );
}
