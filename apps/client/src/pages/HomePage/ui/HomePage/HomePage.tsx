import { ERoutes } from '@constants';
import { buildPath } from '@utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { v4 } from 'uuid';

interface IUser {
  id: number;
  email: string;
  createdAt: string;
}

export const HomePage = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const navigate = useNavigate();

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

  const handleEditorButtonClick = (): void => {
    const roomId = v4();

    const path = buildPath(ERoutes.Room, { id: roomId });

    navigate(path);
  };

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

      <button
        type="button"
        onClick={handleEditorButtonClick}
        style={{ fontSize: '2rem', textDecoration: 'none', color: 'blue' }}
      >
        Editor
      </button>
    </div>
  );
};
