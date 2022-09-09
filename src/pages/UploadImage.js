import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const ImageUpload = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("img", values.image);
    formdata.append("title", values.title);
    const response = await axios.post(
      "http://localhost:4000/uploadfile",
      formdata
    );
    if (response.status === 200) {
      console.log(response.statusText);
    }
    if (response.status === 400) {
      console.log(response.statusText);
    }
  };
  return (
    <div className="container">
      <h2>Image Upload</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="title">Image Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setValues({ ...values, title: e.target.value });
            }}
            placeholder="Image Title"
          />
        </div>
        <div>
          <label htmlFor="Image">Image</label>
          <input
            type="file"
            name="image"
            onChange={(e) => {
              setValues({ ...values, image: e.target.files[0] });
            }}
            placeholder="Image"
          />
        </div>
        <button type="submit">Post Now</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ImageUpload;
