// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "../src/components/Dashboard";
// import withSideBarLayout from "../src/navbar/Sidebar ";
// import TeacherDashboard from "./components/TeacherDashboard";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={withSideBarLayout(<Dashboard />, true)}
//           />
//                     <Route
//             path="/"
//             element={withSideBarLayout(<Dashboard />, true)}
//           />
//           <Route
//             path="TeacherDashboard"
//             element={withSideBarLayout(<TeacherDashboard />, true)}
//           />
//                     <Route
//             path="StudentDashboard"
//             element={withSideBarLayout(<TeacherDashboard />, true)}
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import withSideBarLayout from "./navbar/Sidebar ";
import Students from "./components/Students";
import { Outlet } from "react-router-dom";
import AllStudents from "./components/AllStudents";

const SidebarLayout = () => <div>{withSideBarLayout(<Outlet />)}</div>;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="Dashboard/Teacher" element={<Teacher />} />
            <Route path="Dashboard/Student" element={<Student />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/Students" element={<SidebarLayout />}>
            <Route index element={<Students />} />
            <Route path="AllStudents" element={<AllStudents />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
