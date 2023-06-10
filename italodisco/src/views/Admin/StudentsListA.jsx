import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import styles from "./Users.module.scss";
import Pagination from "react-js-pagination";
import ListDownload from "../../UX/ListDownload";

export default function StudentsListA() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
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
        setErrors(null)
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
            searchTerm: searchTerm,
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

    const downloadPdf = (userId) => {
        axiosClient
            .post(
                "/users/downloadApplicationPdf",
                { user_id: userId },
                { responseType: "blob" }
            )
            .then((response) => {
                const blob = new Blob([response.data], {
                    type: "application/pdf",
                });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `applicationUser${userId}.pdf`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 404) {
                    setErrors("User doesn't has PDF file");
                }
            });
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
            <div className=" my-margin">
                <h1 className="text-white">Students</h1>
                {errors && (
                    <div>
                        <p className="text-danger">
                            {errors}
                        </p>
                    </div>
                )}
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
                                        <Link to={"/admin/users/" + user.id}>
                                            Edit
                                        </Link>
                                        &nbsp;
                                        <button onClick={() => onDelete(user)}>
                                            Delete
                                        </button>
                                        &nbsp;
                                        <button
                                            onClick={() => downloadPdf(user.id)}
                                        >
                                            Download PDF
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
                <ListDownload />
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
