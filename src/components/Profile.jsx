import React from "react";
import profile from "../img/profile.png";

function Profile() {
  return (
    <div>
      <div>
        <img src={profile} alt="Profile" style={{ maxHeight: "40px" }} />
      </div>
    </div>
  );
}

export default Profile;
