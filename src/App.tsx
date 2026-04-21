import { useEffect, useState } from "react";

type User = {
  id?: number | string;
  name?: string;
  [key: string]: any;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/users");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Users</h1>

      {loading && <p>Loading users...</p>}

      {error && (
        <p style={{ color: "red" }}>
          Error: {error}
        </p>
      )}

      {!loading && !error && (
        <ul>
          {users.length === 0 ? (
            <p>No users found</p>
          ) : (
            users.map((user, index) => (
              <li key={user.id || index}>
                {user.name || JSON.stringify(user)}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
