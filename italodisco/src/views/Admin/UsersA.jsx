import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import styles from "./Users.module.scss";
import Pagination from "../../UX/Pagination";

export default function UsersA() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState({
    search: ""
  });

  useEffect(() => {
    getUsers();
  }, []);

  const onDelete = (u) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    axiosClient.delete(`/users/${u.id}`).then(() => {
      getUsers();
    });
  };

  const getUsers = () => {
    setLoading(true);
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setLoading(false);
        setUsers(data.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleSearch = () => {
    setLoading(true);

    const searching = {
        search: searchTerm
    }
    console.log(searchTerm)
    axiosClient
      .post(`/users/searchUsers`, searching)
      .then(({ data }) => {
        setLoading(false);
        setUsers(data.users);
        // console.log(users)
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles["bg-image"] + " d-flex flex-column"}>
      <div>
        <h1 className="text-white">Users</h1>
        <Link className="btn mb-2" to="/users/new">
          Add new
        </Link>
        <div className="mb-2 ">
          <input
            type="text"
            placeholder="Search users"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} className="btn">Search</button>
        </div>
      </div>
      <div className="my-sizing">
        <table className="table-responsive table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>email</th>
                            <th>pesel</th>
                            <th>phone</th>
                            <th>address</th>
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
                    <tbody>
                        {users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.surname}</td>
                                <td>{u.email}</td>
                                <td>{u.pesel}</td>
                                <td>{u.phone}</td>
                                <td>{u.address}</td>
                                <td>
                                    <Link to={"/admin/users/" + u.id}>Edit</Link>
                                    &nbsp;
                                    <button onClick={(ev) => onDelete(u)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <Pagination /> */}
            </div>
        </div>
    );
}
