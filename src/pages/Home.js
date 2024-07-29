import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/allUsers");
    setUsers(result.data);
    // console.log(result.data);
  };

  const onDelete = async (e) => {
    // console.log(e);
    await axios.delete(`http://localhost:8080/deleteUser/${e}`);
    await loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewUserRoute?id=${user.id}`}>View</Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/editUserRoute?id=${user.id}`}>Edit</Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
