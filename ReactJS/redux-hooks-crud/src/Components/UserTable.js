import React from 'react';

const UserTable = ({ users, setUsers, setPerson }) => {
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUpdateUser = (id) => {
    const userToUpdate = users.find((user) => user.id === id);
    setPerson(userToUpdate);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user?.id}>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.phone}</td>
            <td>{user?.website}</td>
            <td>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
            <td>
              <button onClick={() => handleUpdateUser(user.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
