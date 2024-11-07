import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar"; // Ensure correct import
import Students from "./pages/Students";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";
import { StudentDetails } from "./pages/StudentDetails";
import AddStudent from "./Forms/student/Add Student";
import { Details } from "./components/student/Outlet/Details";
import { Attendance } from "./components/student/Outlet/attendance/Attendance";
import { Fees } from "./components/student/Outlet/Fees";
import { TimeTable } from "./components/student/Outlet/timeTable/TimeTable";
import { Exam } from "./components/student/Outlet/Exam/Exam";
import { Promotion } from "./pages/Promotion";
import Teachers from "./pages/Teachers";
import Staffs from "./pages/Staffs";
import AddTeachers from "./Forms/Teachers/Add Teachers";


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

            <Route path="Students/Add Student" element={<AddStudent />} />
            <Route path="Students/Student Promotion" element={<Promotion />} />
            <Route path="Students/Promote student" element={<Promotion isStudent={true} />} />
            <Route path="Students/Details" element={<StudentDetails isTeacher={false} />}>
              <Route index element={<Details isTeacher={false}  />} />
              <Route path="Time Table" element={<TimeTable isTeacher={false}  />} />
              <Route path="Attendance" element={<Attendance isTeacher={false}  />} />
              <Route path="Fees" element={<Fees />} />
              <Route path="Exams" element={<Exam />} />


            </Route>
            <Route path="Teachers" element={<Teachers />} />
            <Route path="Teachers/Details" element={<StudentDetails isTeacher={true} />}>
              <Route index element={<Details isTeacher={true} />} />
              <Route path="Time Table" element={<TimeTable isTeacher={true} />} />
              <Route path="Attendance" element={<Attendance isTeacher={true} />} />
              <Route path="Salary" element={<Fees />} />
            </Route>
            <Route path="Staffs" element={<Staffs />} />
            <Route path="Teachers/Add Teachers" element={<AddTeachers />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
