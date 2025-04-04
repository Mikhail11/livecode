import { useEffect, useState } from 'react';
import { Link } from 'react-router';

interface IUser {
  id: number;
  email: string;
  createdAt: string;
}

export const HomePage = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    const controller = new AbortController();

    fetch(`${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api/user`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
        setIsError(null);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Request aborted');
        } else {
          setIsLoading(false);
          setIsError(error);
          setUsers(null);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (isError) {
    return <h3>Failed to fetch users</h3>;
  }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div style={{ padding: '50px' }}>
      <h1>Users list</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>
        {users?.map((user) => (
          <article style={{ border: '1px solid aqua' }} key={user.id}>
            <h3>ID {user.id}</h3>
            <h4>{user.email}</h4>
            <h4>Created at {user.createdAt}</h4>
          </article>
        ))}
      </div>

      <Link to="/room" style={{ fontSize: '2rem', textDecoration: 'none', color: 'blue' }}>
        Editor
      </Link>
    </div>
  );
};
