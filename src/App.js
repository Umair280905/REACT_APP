//Experiment 8

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <Navbar title="Hello!" aboutText="About Us" />
    //   <Routes>
    //     <Route path="/about" element={<About />} />
    //     <Route path="/" element={<h1>Home Page</h1>} />
    //   </Routes>
    // </Router>
  );
}

export default App;










//Experiment 7:

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.length < 3) {
//       newErrors.name = "Name must be at least 3 characters long";
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email address is invalid";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Form submitted successfully!");
//       console.log("Form Data:", formData);
//       setFormData({ name: "", email: "", password: "", confirmPassword: "" });
//     }
//   };

//   return (
//     <div className="container">
//       <h2>React Form Validation</h2>
//       <form onSubmit={handleSubmit} noValidate>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div>

//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>

//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p className="error">{errors.password}</p>}
//         </div>

//         <div className="form-group">
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && (
//             <p className="error">{errors.confirmPassword}</p>
//           )}
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
