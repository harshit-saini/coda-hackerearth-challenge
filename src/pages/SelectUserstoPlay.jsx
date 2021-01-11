import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import Search from "../components/Search";
import Table from "../components/UserListTable";
import SelectedUserSection from "../components/SelectedUserSection";
import Pagination from "../components/Pagination";

const getCurrentUsersArray = (allUsers, limit, pageNumber) => {
  const startIndex = (pageNumber - 1) * limit;
  const newUsers = _(allUsers).slice(startIndex).take(limit).value();
  console.log(newUsers);
  return newUsers;
};

export default class SelectUsersToPlay extends Component {
  state = {
    users: [],
    currentPage: 1,
    usersPerPage: 10,
    selectedUsers: [],
  };

  componentDidMount = () => {
    // functions to get the users from the API
    const getData = async () => {
      const { data } = await axios.get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json"
      );

      this.setState({ users: data });
    };
    getData();
  };

  handlePagination = (event) => {
    let newPage;
    if (event.target.id === "previous" && this.state.currentPage > 1)
      newPage = --this.state.currentPage;
    else if (
      event.target.id === "next" &&
      this.state.currentPage <
        Math.ceil(this.state.users.length / this.state.usersPerPage)
    )
      newPage = ++this.state.currentPage;
    this.setState({ currentPage: newPage });
  };

  handleUserSelect = (event) => {
    console.log(event.target.checked);
    if (event.target.checked && this.state.selectedUsers.length < 9) {
      const user = this.state.users.filter(
        (user) => user.Name === event.target.id
      );
      const allSelectedUser = [...this.state.selectedUsers, ...user];
      this.setState({ selectedUsers: allSelectedUser });
    } else {
      event.target.checked = false;
      const newAllUsers = this.state.selectedUsers.filter(
        (user) => user.Name !== event.target.id
      );
      this.setState({ selectedUsers: newAllUsers });
    }
  };

  render() {
    const newUsers = getCurrentUsersArray(
      this.state.users,
      this.state.usersPerPage,
      this.state.currentPage
    );
    return (
      <div style={{ height: "100vh" }}>
        <div className="d-flex">
          <SelectedUserSection selectedUsers={this.state.selectedUsers} />
          <div
            className="p-4"
            style={{ flexGrow: "1", backgroundColor: "#F0F4F6" }}
          >
            <p className="text-blue h4 mt-3 p-2">Select players</p>
            <Search />
            <Table users={newUsers} onUserSelect={this.handleUserSelect} />
            <Pagination
              onPaginationClick={this.handlePagination}
              pageNumber={this.state.currentPage}
              totalPages={Math.ceil(
                this.state.users.length / this.state.usersPerPage
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
