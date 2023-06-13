import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h1>Daftar Pengguna</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <Link to={`/profil-dokter/${user.id}`}>Lihat Detail</Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
