import React from 'react';
import UserForm from './Components/UserForm';
import UserTable from './Components/UserTable';

function App() {
  const [showUsers, setShowUsers] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  console.log('🚀 ~ file: App.js ~ line 8 ~ App ~ users', users);
  const [person, setPerson] = React.useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  console.log(person);

  //parce users from local storage
  React.useEffect(() => {
    const usersFromLocalStorage = JSON.parse(localStorage.getItem('users'));
    if (usersFromLocalStorage) {
      setUsers(usersFromLocalStorage);
    }
  }, []);

  //store users in local storage
  React.useEffect(() => {
    if (users?.length) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, [users]);

  const handleUpdateUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <>
      <button onClick={() => setShowUsers(true)}>Create</button>
      <button onClick={() => setShowUsers(false)}>List</button>
      {!showUsers ? (
        <UserTable
          users={users}
          setUsers={setUsers}
          handleUpdateUser={handleUpdateUser}
          setPerson={setPerson}
        />
      ) : (
        <UserForm
          setUsers={setUsers}
          users={users}
          person={person}
          setPerson={setPerson}
        />
      )}
    </>
  );
}

export default App;
