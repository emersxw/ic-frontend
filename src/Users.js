import React, { useEffect, useState } from 'react';
import axios from './base';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await axios.get('users');
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        // setError(true)
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  if (loading) return <div>loading</div>;

  // if (error) return <div>there was an error ...</div>

  return (
    <div className='App'>
      {users.data.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.id}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
