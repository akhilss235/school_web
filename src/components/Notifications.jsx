import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

function Notifications() {
  return (
    <div>
      <div className="p-2">
        <IoMdNotificationsOutline
          style={{ color: "#505050", fontSize: "25px" }}
        />
      </div>
    </div>
  );
}

export default Notifications;
