import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Hardik",
      email: "hardikd@zignuts.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <div className="my-3">
        <button onClick={handleLogin} className="btn btn-success m-1">
          Login
        </button>
        <button onClick={handleLogout} className="btn btn-danger m-1">
          Log out
        </button>
        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>
      </div>
    </>
  );
};

export default User;
