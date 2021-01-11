import React from "react";

const UserInTable = ({ name, bet, price, profileImage, onUserSelect }) => {
  return (
    <tr>
      <td>
        <input
          className="form-check-input"
          type="checkbox"
          name=""
          id={name}
          onClick={onUserSelect}
        />
      </td>
      <td>{name}</td>
      <td>Level</td>
      <td>
        <img
          className="img-fluid border rounded"
          height="40px"
          width="40px"
          src={profileImage}
        />
      </td>
      <td>{bet}</td>
      <td>Wins</td>
      <td>Lost</td>
      <td>{price}</td>
    </tr>
  );
};

export default UserInTable;
