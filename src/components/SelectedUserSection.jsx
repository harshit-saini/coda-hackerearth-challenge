import React from "react";
import { Link } from "react-router-dom";
import UserInSelectedArea from "./UserInSelectedArea";

const SelectedUserSection = ({ selectedUsers }) => {
  return (
    <div
      className="p-2 d-flex flex-column"
      style={{ flexBasis: "350px", backgroundColor: "#EBF0F2" }}
    >
      <p className="h3 text-center text-blue mt-4">
        These are the selected users
      </p>
      {selectedUsers.map((user) => (
        <UserInSelectedArea user={user} />
      ))}
      <Link
        to="/play"
        disabled={selectedUsers.length < 9}
        className="btn btn-primary btn-block m-1"
        style={{ justifySelf: "end", alignSelf: "flex-end" }}
      >
        START
      </Link>
    </div>
  );
};

export default SelectedUserSection;
