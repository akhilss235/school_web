import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import { Outlet } from "react-router-dom";

export const ScheduleExam = () => {
  
  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Schedule Exam</b>
        </h4>
        <BasicBreadcrumbs />
      </div>
      <Outlet />
    </div>
  );
};
