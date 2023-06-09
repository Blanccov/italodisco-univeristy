import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import styles from "./Users.module.scss";
import Pagination from "react-js-pagination";

export default function UsersA() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const mobileScreen = 991;
    const screenWidth = window.innerWidth;

    useEffect(() => {
        function handleResize() {
            if (screenWidth <= mobileScreen) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(5);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

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
                setTotalItems(data.data.length);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const handleSearch = () => {
        setLoading(true);

        const searching = {
            search: searchTerm,
        };

        axiosClient
            .post(`/users/searchUsers`, searching)
            .then(({ data }) => {
                setLoading(false);
                setUsers(data.users);
                setTotalItems(data.users.length);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <div className="my-margin">
                <h1 className="text-white">Users</h1>
                <Link className="btn mb-2" to="/admin/users/new">
                    Add new
                </Link>
                <div className="mb-2 ">
                    <input
                        type="text"
                        placeholder="Search users"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                    {!loading && (
                        <tbody>
                            {currentItems.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.surname}</td>
                                    <td>{u.email}</td>
                                    <td>{u.pesel}</td>
                                    <td>{u.phone}</td>
                                    <td>{u.address}</td>
                                    <td>
                                        <Link to={"/admin/users/" + u.id}>
                                            Edit
                                        </Link>
                                        &nbsp;
                                        <button onClick={(ev) => onDelete(u)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
                {screenWidth <= mobileScreen && (
                    <div className="pagination-container">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={itemsPerPage}
                            totalItemsCount={totalItems}
                            pageRangeDisplayed={itemsPerPage}
                            onChange={handlePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                )}
            </div>
            {!(screenWidth <= mobileScreen) && (
                <div className="pagination-container">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={totalItems}
                        pageRangeDisplayed={itemsPerPage}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            )}
        </div>
    );
}
