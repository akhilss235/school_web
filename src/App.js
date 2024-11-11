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
import { Fees } from "./components/student/Outlet/fees/Fees";
import { TimeTable } from "./components/student/Outlet/timeTable/TimeTable";
import { Exam } from "./components/student/Outlet/Exam/Exam";
import { Promotion } from "./pages/Promotion";
import Teachers from "./pages/Teachers";
import Staffs from "./pages/Staffs";
import AddTeachers from "./Forms/Teachers/Add Teachers";
import { Salary } from "./components/student/Salary";
import StudentsList from "./submenu/Students List";
import AddStaff from "./Forms/Staff/Add Staff";
import Parents from "./pages/Parents";
import Subjects from "./pages/Subjects";
import ClassRooms from "./submenu/Class Rooms";
import ClassesSections from "./submenu/Classes & Sections";
import AllocateClassRooms from "./submenu/Allocate Class Rooms";
import Exams from "./pages/Exams";

// import Feess from "./pages/Fees";
// import Attendances from "./pages/Attendance";
// import Accounts from "./pages/Accounts";
import UserAccess from "./pages/User Access";
import SetTiming from "./submenu/Set Timing";
import ScheduleClasses from "./submenu/Schedule Classes";
import { SetExam } from "./pages/Exam/SetExam";
import { ScheduleExam } from "./pages/Exam/ScheduleExam";
import { GradeSetting } from "./pages/Exam/GradeSetting";
import { AllocateList } from "./components/AllocateList";
import { ScheduleExamList } from "./components/ScheduleExam/ScheduleExamList";
import { ScheduleExamTable } from "./components/ScheduleExam/ScheduleExamTable";
import { ScheduleExamForm } from "./components/ScheduleExam/ScheduleExamForm";
import TeachersAttendance from "./pages/Attendance/Teachers Attendance";
import StaffAttendance from "./pages/Attendance/Staff Attendance";
import AttendanceHistory from "./pages/Attendance/Attendance History";
import Expense from "./pages/Accounts/Expense";
import Transaction from "./pages/Accounts/Transaction";
import LeaveRequest from "./pages/Leave/Leave Request";
import LeaveSettings from "./pages/Leave/Leave Settings";
import CollectFees from "./pages/Fees/Collect Fees";
import FeesGroup from "./pages/Fees/Fees Group";
import FeesType from "./pages/Fees/Fees Type";
import FeesMaster from "./pages/Fees/Fees Master";
import AccountDetails from "./pages/Fees/Account Details";
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
            {/* <Route path="Students" element={<Students />} /> */}
            <Route path="Students List" element={<StudentsList />} />

            <Route path="Students/Add Student" element={<AddStudent />} />
            <Route
              path="Students/Students Promotion"
              element={<Promotion title={"student"} />}
            />
            <Route
              path="Students/Promote student"
              element={<Promotion isStudent={true} title={"student"} />}
            />
            <Route
              path="Students/Details"
              element={<StudentDetails isTeacher={false} />}
            >
              <Route index element={<Details isTeacher={false} />} />
              <Route
                path="Time Table"
                element={<TimeTable isTeacher={false} />}
              />
              <Route
                path="Attendance"
                element={<Attendance isTeacher={false} />}
              />
              <Route path="Fees" element={<Fees />} />
              <Route path="Exams" element={<Exam />} />
            </Route>
            <Route path="Teachers" element={<Teachers />} />
            <Route path="Teachers/Add Teachers" element={<AddTeachers />} />
            <Route
              path="Teachers/Details"
              element={<StudentDetails isTeacher={true} />}
            >
              <Route index element={<Details isTeacher={true} />} />
              <Route
                path="Time Table"
                element={<TimeTable isTeacher={true} />}
              />
              <Route
                path="Attendance"
                element={<Attendance isTeacher={true} />}
              />
              <Route path="Salary" element={<Salary />} />
            </Route>
            <Route path="Staffs" element={<Staffs />} />
            <Route path="/Staffs/Add Staff" element={<AddStaff />} />

            <Route
              path="Staffs/Details"
              element={<StudentDetails isTeacher={true} isStaff={true} />}
            >
              <Route index element={<Details isTeacher={true} />} />
              <Route
                path="Time Table"
                element={<TimeTable isTeacher={true} />}
              />
              <Route
                path="Attendance"
                element={<Attendance isTeacher={true} />}
              />
              <Route path="Salary" element={<Salary />} />
            </Route>
            <Route path="Parents" element={<Parents />} />
            <Route path="Subjects" element={<Subjects />} />

            <Route path="Classes/Class Rooms" element={<ClassRooms />} />
            <Route
              path="Classes/Classes & Sections"
              element={<ClassesSections />}
            />
            <Route
              path="Classes/Allocate Class Rooms"
              element={<AllocateClassRooms />}
            >
              <Route index element={<AllocateList />} />
              <Route
                path="shift class"
                element={<Promotion isCrumbsNeeded={false} title={"class"} />}
              />
            </Route>

            {/* TimeTable */}
            <Route path="Time Tables/Set Timing" element={<SetTiming />} />
            <Route
              path="Time Tables/Schedule Classes"
              element={<ScheduleClasses />}
            />

            <Route path="Exams/Set Exams" element={<SetExam />} />
            <Route path="Exams/Schedule Exams" element={<ScheduleExam />}>
              <Route index element={<ScheduleExamList />} />
              <Route
                path="Exam Table"
                element={<ScheduleExamTable isExam={true} />}
              />
              <Route
                path="Add Exam"
                element={<ScheduleExamTable isExam={false} />}
              />
            </Route>
            <Route path="Exams/Grade Settings" element={<GradeSetting />} />

            {/* <Route path="Fees" element={<Feess />} /> */}
            {/* <Route path="Attendance" element={<Attendances />} /> */}
            {/* <Route path="Accounts" element={<Accounts />} /> */}
            <Route path="User Access" element={<UserAccess />} />

            {/* Attendance  */}
            <Route
              path="Attendance/Teachers Attendance"
              element={<TeachersAttendance />}
            />
            <Route
              path="Attendance/Staff Attendance"
              element={<StaffAttendance />}
            />
            <Route
              path="Attendance/Attendance History"
              element={<AttendanceHistory />}
            />

            <Route path="Accounts/Expense" element={<Expense />} />

            <Route path="Accounts/Transaction" element={<Transaction />} />
            <Route path="Leave/Leave Request" element={<LeaveRequest />} />
            <Route path="Leave/Leave Settings" element={<LeaveSettings />} />

            <Route path="Fees/Collect Fees" element={<CollectFees />} />
            <Route path="Fees/Fees Group" element={<FeesGroup />} />
            <Route path="Fees/Fees Type" element={<FeesType />} />
            <Route path="Fees/Fees Master" element={<FeesMaster />} />
            <Route path="Fees/Account Details" element={<AccountDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
