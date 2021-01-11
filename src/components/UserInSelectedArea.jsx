import React from "react";

const UserInSelectedArea = ({ user }) => {
  return (
    <div className="m-2 p-1">
      <img
        className="border rounded"
        src={user["Profile Image"]}
        alt="userProfile"
        height="50px"
        weight="50px"
      />
      <span className="lead">{user.Name}</span>
      <span style={{ marginLeft: "auto" }}>{user.Price}</span>
    </div>
  );
};

export default UserInSelectedArea;
