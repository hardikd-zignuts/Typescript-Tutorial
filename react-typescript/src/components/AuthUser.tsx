import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const AuthUser = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <div className="my-3">
        <button
          onClick={() =>
            setUser({
              email: "hardikdesai@zignuts.com",
              name: "Hardik Desai",
            })
          }
          className="btn btn-success m-1"
        >
          Login
        </button>
        <button onClick={() => setUser(null)} className="btn btn-danger m-1">
          Log out
        </button>
        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>
      </div>
    </>
  );
};

export default AuthUser;
