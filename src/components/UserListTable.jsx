import React from "react";
import UserInTable from "./UserInTable";

const UserListTable = ({ users, onUserSelect }) => {
  return (
    <div className="p-2" style={{}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Select</th>
            <th scope="col">Player Name</th>
            <th scope="col">Level</th>
            <th scope="col">Avatar</th>
            <th scope="col">Bet</th>
            <th scope="col">Wins</th>
            <th scope="col">Lost</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserInTable
              key={index}
              name={user.Name}
              bet={user.Bet}
              price={user.Price}
              profileImage={user["Profile Image"]}
              onUserSelect={onUserSelect}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
