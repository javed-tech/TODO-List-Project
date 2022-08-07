import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Switch,Modal } from 'antd';
import 'antd/dist/antd.css';

const Home = ({documents,deletebtn}) => {
  const [checked, setChecked] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log(documents,'list')
  return (
    <div className="container">
      <div className="py-4">
        <h1>List Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
          documents.map((item,index) => (
            <tr key={index}>
                {/* <th scope="row">{index + 1}</th> */}
                <td>{item.id}</td>
                <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>

                <td>
                  <Link
                    class="btn btn-danger "
                    onClick={()=>deletebtn(index)}
                    
                  >
                    Delete
                  </Link>
                </td>
                <td>
                <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked onChange={()=>{
                  setChecked()
                  if(checked){
                    showModal()
                  }
                  
                  }}/>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Modal title="Alert" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>First delete the Toggle OFF List.</p>
      </Modal>

    </div>
  );
};

export default Home;
