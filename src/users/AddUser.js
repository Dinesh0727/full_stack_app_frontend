import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function AddUser() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const { firstName, lastName, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit =  async (e) => {
    e.preventDefault();
    console.log(user);
    await axios.post("http://localhost:8080/addUser", user);
    navigate("/");
  };

  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                First Name
              </label>
              <input
                type={"text"}
                className="form-control mb-3"
                placeholder="Enter your firstname"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              ></input>
              <label htmlFor="LastName" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control mb-3"
                placeholder="Enter your lastname"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              ></input>
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control mb-3"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
              <button className="btn btn-outline-primary mx-2" >Submit</button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </div>  
          </form>
        </div>
      </div>
    </div>
  );
}
