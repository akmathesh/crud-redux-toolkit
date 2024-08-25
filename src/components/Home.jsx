import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../slices/UsersSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  const [usersData, setUsersData] = useState(users);
  console.log(usersData);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  // useEffect(() => {
  //   const storedData = localStorage.getItem("users");
  //   if (storedData) {
  //     setUsersData(JSON.parse(storedData));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(usersData));
  // }, [usersData]);

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
          {users.length > 0 ? (
            users.map((user, index) => (
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
