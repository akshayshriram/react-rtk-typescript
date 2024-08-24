import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List Of Users : </h2>
      {user.loading && <p>Loading...</p>}
      {!user.loading && user.error ? <p>Error: {user.error}</p> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
