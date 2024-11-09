import { Outlet } from "react-router-dom";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
;

function AllocateClassRooms() {
  
  
  return (
    <div className="p-4">
      <div className="text-start mb-3">
        <h4>
          <b>Allocate Class Rooms</b>
        </h4>
        <BasicBreadcrumbs />
      </div>
      <Outlet />
    </div>
  );
}



export default AllocateClassRooms