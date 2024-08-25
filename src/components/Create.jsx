import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../slices/usersSlice";

const Create = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users.length + 1, name, email }));
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="container d-flex w-100 vh-100 justify-content-center align-items-center text-light">
      <div className="w-50 border p-5 rounded">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Create User</h1>
          <div className="form-group mt-4 ">
            <label htmlFor="name" className="mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="email" className="mb-2">
              Email ID:
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning mt-4 w-100">Add user</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
