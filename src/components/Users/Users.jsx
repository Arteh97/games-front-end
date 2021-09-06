import React, { useEffect, useState } from "react";
import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://arteh97.herokuapp.com/api/users")
      .then((response) => response.json())
      .then((body) => {
        // console.log(body);
        setUsers(body.users);
      });
  });

  return (
    <div className="container mt-5">
      <ul className={styles.card}>
        {users.map((user) => {
          return (
            <div key={user.name}>
              <div>{user.username}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
