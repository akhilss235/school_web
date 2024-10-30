import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar "; // Ensure correct import
import Students from "./components/Students";
import { Outlet } from "react-router-dom";
import List from "./submenu/List";
import Details from "./submenu/Details";
import Promotion from "./submenu/Promotion";
import Login from "./pages/Login";

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
            <Route path="List" element={<List />} />
            <Route path="Details" element={<Details />} />
            <Route path="Promotion" element={<Promotion />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
