import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userListAction } from '../Redux/Actions/userAction';

const UserList = () => {
  const [page, setPage] = React.useState(1);

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(userListAction(page));
  }, [dispatch, page]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='container'>
      <h2>User List</h2>
      <ul>
        {/* List of users */}

        {users.map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
      {/* Pagination Buttons */}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        {page}
        <button onClick={() => setPage(page + 1)} disabled={page === 2}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
