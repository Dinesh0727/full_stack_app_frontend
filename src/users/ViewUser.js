import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewUser() {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = user;

  const loadUser = async (id) => {
    const fetchedUser = await axios.get(`https://fullstackspringbootreact-production.up.railway.app/user/${id}`);
    setUser(fetchedUser.data);
    console.log(
      "The user fetched through the request from the viewUser page" +
        fetchedUser
    );
  };

  useEffect(() => {
    loadUser(id);
  }, [id]);

  return (
    <div className="container">
      <div className="card mt-5" style={{ width: "18rem", margin: "auto" }}>
        <div className="card-body">
          <h5 className="card-title">{firstName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{lastName}</h6>
          <p className="card-text">{email}</p>
        </div>
      </div>
      <Link className="btn btn-info mt-2" to="/">
        Go to Home
      </Link>
    </div>
  );
}
