import { useEffect, useState } from 'react';
import { Users } from './userInterface';

import axios from 'axios';
// Axios დასაყენებლად terminal უნდა გაეშვას ბრძანება
//              npm install axios

function AppAxios() {
  const [users, setUsers] = useState<Users[] | null>(null);

  useEffect(() => {
    const requestUser = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = response.data;
      console.log('ქვემოთა data არის Axios ');
      console.log(data);
      setUsers(data);
    };
    requestUser();
  }, []);
  return (
    <div>
      <h1>Axios</h1>
      <ul>{users && users.map(user => <li key={user.id}>{user.id}</li>)}</ul>
    </div>
  );
}

export default AppAxios;
