import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.service";
import { logout } from "../../store/auth.Slice"

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .finally(() => console.log("You tried to logout"));
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 
    hover:bg-blue-300 rounded-full"
    onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
