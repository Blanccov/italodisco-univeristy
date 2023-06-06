import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import styles from "./Users.module.scss";
import Pagination from "react-js-pagination";

export default function StudentsListA() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const onDelete = (user) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    axiosClient.delete(`/users/${user.id}`).then(() => {
      getUsers();
    });
  };

  const getUsers = () => {
    setLoading(true);
    const params = {
      page: currentPage,
      searchTerm: searchTerm
    };

    axiosClient
      .get("/users/getAcceptedStudentsList", { params })
      .then(({ data }) => {
        setLoading(false);
        setUsers(data.accepted_students);
        setTotalItems(data.accepted_students.length);
      })
      .catch(() => {
        setLoading(false);
      });
  };


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name} ${user.surname}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles["bg-image"] + " d-flex flex-column"}>
      <div>
        <h1 className="text-white">Students</h1>
        <Link className="btn mb-2" to="/admin/users/new">
          Add new
        </Link>
        <div className="mb-2">
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={handleSearch}
        />
        </div>
      </div>
      <div className="my-sizing">
        <table className="table-responsive table-hover">
          <thead>
            <tr className="table-primary">
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Pesel</th>
              <th>Phone</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <td>Loading...</td>
              </tr>
            </tbody>
          )}
          {!loading && (
            <tbody>
              {currentItems.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                  <td>{user.pesel}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>
                    <Link to={"/admin/users/" + user.id}>Edit</Link>
                    &nbsp;
                    <button onClick={() => onDelete(user)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={totalItems}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
}
