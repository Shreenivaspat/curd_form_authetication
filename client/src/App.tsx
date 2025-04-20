// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
// import Home from "./pages/Home";

// const App: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="/login" element={<LoginForm />} />
//       <Route path="/register" element={<RegisterForm />} />
//       <Route path="/home" element={<Home />} />
//     </Routes>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      {" "}
      {/* Wrap your Routes inside Router */}
      <Routes>
        <Route path="/" element={<RegisterForm />} /> {/* Add default route */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
