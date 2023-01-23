import { useEffect, useState } from 'react';
import { Users } from './userInterface';

function AppAsyncAwait() {
  const [users, setUsers] = useState<Users[] | null>(null);

  useEffect(() => {
    const requestUser = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();

      console.log('ქვემოთა data არის async await ');
      console.log(data);
      setUsers(data);
    };
    requestUser();
  }, []);
  return (
    <div>
      <h1>Async await</h1>
      <ul>{users && users.map(user => <li key={user.id}>{user.email}</li>)}</ul>
    </div>
  );
}

export default AppAsyncAwait;
