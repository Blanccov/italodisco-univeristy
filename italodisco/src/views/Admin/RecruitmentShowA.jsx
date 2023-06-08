import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

export default function RecruitmentShowA() {
    const { departament } = useParams();
    const [recruitment, setRecruitment] = useState([]);
    // const [loading, setLoding] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        getRecruitment();
    }, []);

    const onDelete = (u) => {
        if (!window.confirm("are you sure u want to delete this user?")) {
            return;
        }

        axiosClient.delete(`/recruitments/${u.id}`).then(() => {
            getRecruitment();
        });
    };

    const getRecruitment = () => {
        axiosClient
            .get(`/recruitments?filters[departament][$eq]=${departament}`)
            .then(({ data }) => {
                setRecruitment(data.data);
                console.log(data.data.length)
                setTotalItems(data.data.length);
            })
            .catch(() => {});
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles["bg-image"]}>
            <div className="my-sizing">
                <Link className="btn mb-2" to="/admin/recruitments/subjects">
                    Add new
                </Link>
                <div className="d-flex flex-row flex-wrap">
                    {recruitment.map((u) => (
                        <div
                            className="card border-dark m-3 my-card"
                            key={u.id}
                        >
                            <div className="card-header">{u.departament}</div>
                            <div className="card-body">
                                <h4 className="card-title">{u.name}</h4>
                                <p className="card-text">{u.description}</p>
                            </div>
                            {/* <Link to={"/admin/recruitments/" + u.id}>Edit</Link> */}
                            <Link to={"/admin/recruitments/"+ u.departament + "/" + u.id}>Edit</Link>
                            {/* &nbsp; */}
                            <button onClick={(ev) => onDelete(u)}>
                                Delete
                            </button>
                            <Link to={"/admin/students/" + u.id}>Students</Link>
                        </div>
                    ))}
                </div>
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
