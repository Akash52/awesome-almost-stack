import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userDetailsAction,
  usersListAction,
} from "../Redux/Actions/userAction";
import UserDetails from "./UserDetails";
import UserForm from "./UserForm";

const UserList = () => {
  const dispatch = useDispatch();
  const [singelUser, setSingleUser] = React.useState(null);
  const userDetails = useSelector((state) => state.userList);
  const userInfo = useSelector((state) => state.userInfo);
  const { loading, users, error } = userDetails;
  const { person } = userInfo;

  React.useEffect(() => {
    dispatch(usersListAction());
  }, [dispatch]);

  React.useEffect(() => {
    if (person) {
      setSingleUser(person);
    }
  }, [dispatch, person]);

  const userDetail = (id) => {
    dispatch(userDetailsAction(id));
  };

  return (
    <div className="container mx-auto">
      <UserForm singelUser={singelUser} />
      {loading ? (
        <li>Loading...</li>
      ) : error ? (
        <li>{error}</li>
      ) : (
        <div className="flex  flex-wrap  mx-auto">
          {users.map((user) => (
            <UserDetails key={user.id} user={user} userDetail={userDetail} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
