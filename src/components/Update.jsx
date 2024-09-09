import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../slices/UsersSlice.jsx";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser = users.filter((f) => f.id == id);

  const { name, email } = existingUser[0];

  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border p-5 rounded-4">
        <form onSubmit={handleUpdate}>
          <h1 className="mb-5">Update user</h1>
          <div className="mb-4">
            <label htmlFor="uname">Update Name</label>
            <input
              type="text"
              className="form-control my-3"
              id="uname"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="uemail">Update Email</label>
            <input
              type="text"
              className="form-control my-3"
              id="uemail"
              value={uemail}
              onChange={(e) => setUemail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100 mt-3">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
