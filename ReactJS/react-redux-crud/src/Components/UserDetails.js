import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserAction, usersListAction } from "../Redux/Actions/userAction";

const UserDetails = ({ user, userDetail }) => {
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUserAction(id));
    }
    dispatch(usersListAction());
  };

  const userDetails = (id) => {
    userDetail(id);
  };

  return (
    <div className="w-full px-4   mx-auto  transition duration-500 transform md:w-6/12 xl:4/12 lg:w-4/12 lg:mb-0 hover:scale-110">
      <div className="max-w-sm px-5 py-4 my-2 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">{user.name}</h2>
          <h5 className="text-xl font-bold text-gray-400">{user.email}</h5>
          <button
            class="font-bold py-2 px-4 rounded-full cursor-pointer"
            onClick={() => deleteUser(user.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-400 hover:text-red-600 transition duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button
            class="font-bold py-2 px-4 rounded-full"
            onClick={() => userDetails(user.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
