import { useEffect, useState } from 'react';
import { Users } from './userInterface';

function AppFetch() {
  let x: string = 'სტრინგია ძმა';

  const [users, setUsers] = useState<Users[] | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log('ქვემოთა data არის fetch()');
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <div>
      {x}
      <h1>Fetch()</h1>
      <ul>{users && users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}

export default AppFetch;
