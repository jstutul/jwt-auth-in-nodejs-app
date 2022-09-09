import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Secret from "./pages/Secret";
import UploadImage from "./pages/UploadImage";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/image" element={<UploadImage />}></Route>
        <Route exact path="/" element={<Secret />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
