import { useState, useEffect } from "react";

function UseWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  return width;
}

function AskUser() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <Name name={name} />
    </div>
  );
}

function Name({ name }) {
  return <p>Hello {name}</p>;
}

function App() {
  const width = UseWindowWidth();
  return <div>Window width is {width}px</div>;
}

function User() {
  const [users] = useState([
    { name: "Amit", age: 20, isOnline: true },
    { name: "Ravi", age: 16, isOnline: false },
    { name: "Kiran", age: 25, isOnline: true },
    { name: "Pooja", age: 17, isOnline: false }
  ]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Status</h1>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}
function UserCard({ user }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      borderRadius: "8px",
      marginBottom: "1rem"
    }}>
      <h3>{user.name}</h3>
      {user.isOnline ? (
        <p style={{ color: "green" }}>🟢 Online</p>
      ) : (
        <p style={{ color: "gray" }}>⚫ Offline</p>
      )}
    </div>
  );
}


export { App, UseWindowWidth, Name, AskUser, UserCard, User }