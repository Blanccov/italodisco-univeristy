import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../../axios-client";
import styles from "./Users.module.scss";
import Pagination from "react-js-pagination";

export default function StudentsA() {
    const { id } = useParams();
    const [students, setStudents] = useState([]);
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
    }, [currentPage]);

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

        const recruId = {
            recruitment_id: id,
            searchTerm: searchTerm,
        };

        axiosClient
            .post("/users/getAcceptedStudents", recruId)
            .then(({ data }) => {
                setLoading(false);
                setStudents(data.accepted_students);
                setTotalItems(data.accepted_students.length);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filteredStudents = students.filter((student) => {
        const fullName = `${student.name} ${student.surname}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = filteredStudents.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <div className="">
                <h1 className="text-white">Students</h1>
            </div>
            <div className="my-sizing">
                <input
                    type="text"
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="mb-2"
                />
                <div>
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
                                {currentStudents.map((u) => (
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
                                            <button
                                                onClick={(ev) => onDelete(u)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
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
