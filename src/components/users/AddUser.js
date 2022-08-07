import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = (props) => {
  let history = useHistory();
  const initialFormState = { id: null, name: "", email: "", mobile:"" };
  const [document, setDocument] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setDocument({ ...document, [name]: value });
  };

  const Submitform = (event) => {
    event.preventDefault();
    if (!document.name || !document.email || !document.mobile) return
    props.addDocument(document);
    setDocument(initialFormState);
    console.log(document, 'data after submit')
    history.push('/')
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={Submitform}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control form-control-lg"
              required
              placeholder="Enter name"
              value={document.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control form-control-lg"
              required
              placeholder="Enter email"
              value={document.email}
              onChange={handleInputChange}
            />          
            </div>
            <div className="form-group">
            <input
              type="mobile"
              maxLength="10"
              name="mobile"
              className="form-control form-control-lg"
              required
              placeholder="Enter Mobile Number"
              value={document.mobile}
              onChange={handleInputChange}
            />  
             </div>

          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
