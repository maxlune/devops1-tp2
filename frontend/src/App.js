import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newUser = await response.json();
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setName("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>List of users :</h1>
          {users.length === 0 ? (
            <p>No users found</p>
          ) : (
            <ul style={{ listStyleType: "none" }}>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
        <h1>Add a new user :</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter user name"
          />
          <button type="submit">Add User</button>
        </form>
      </header>
    </div>
  );
}

export default App;
