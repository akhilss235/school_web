import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar"; // Ensure correct import
import Students from "./pages/Students";
import { Outlet } from "react-router-dom";
import Promotion from "./submenu/Promotion";
import Login from "./pages/Login";
import { StudentDetails } from "./pages/StudentDetails";


const SidebarLayout = () => (
  <Sidebar>
    <Outlet />
  </Sidebar>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<SidebarLayout />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Students" element={<Students />} />
            <Route path="Promotion" element={<Promotion />} />
            <Route path="Students/Details" element={<StudentDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
