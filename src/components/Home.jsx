import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLocalStorageItem, deleteUser } from "../slices/UsersSlice";

const Home = () => {
  const { userData } = useSelector((state) => state.users);
  console.log(userData);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  // useEffect(() => {
  //   dispatch(getLocalStorageItem())
  // }, [])

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bolder">CRUD App with JSON data</h1>
      <Link to={"/create"} className="btn btn-success mt-5">
        Create +
      </Link>

      <table className="table mt-5 overflow-x-scroll table-stripped table-dark rounded-3">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 ? (
            userData.map((user, index) => (
              <tr key={index} className="text-center">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  <Link to={`/update/${user.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center">
              <td colSpan={4} className="fw-bold">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
