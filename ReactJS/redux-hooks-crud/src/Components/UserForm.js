import React from 'react';

const UserForm = ({ setUsers, users, person, setPerson }) => {
  console.log('🚀 ~ file: UserForm.js ~ line 4 ~ UserForm ~ users', users);
  const [user, setUser] = React.useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    website: '',
  });
  //create function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  //create function to handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!person.id) {
      const id = Math.floor(Math.random() * 1000) + 1;
      setUsers([...users, { ...user, id }]);
    } else {
      localStorage.setItem('users', JSON.stringify([...users, user]));
      setUsers([...users, user]);
      // setPerson(user);
    }
  };

  React.useEffect(() => {
    if (person) {
      setUser(person);
    }
  }, [person]);

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>Phone:</label>
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleInputChange}
      />
      <label>Website:</label>
      <input
        type="text"
        name="website"
        value={user.website}
        onChange={handleInputChange}
      />
      {person ? (
        <button type="submit">Update</button>
      ) : (
        <button type="submit">Create</button>
      )}
    </form>
  );
};

export default UserForm;
