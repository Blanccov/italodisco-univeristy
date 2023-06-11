import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

export default function RecruitmentShowA() {
    const { departament } = useParams();
    const [recruitment, setRecruitment] = useState([]);
    // const [loading, setLoding] = useState(false);
    useEffect(() => {
        getRecruitment();
    }, []);


    const getRecruitment = () => {
        axiosClient
            .get(`/recruitments?filters[departament][$eq]=${departament}`)
            .then(({ data }) => {
                setRecruitment(data.data);
            })
            .catch(() => {});
    };

    return (
        <div className={styles["bg-image"]}>
            <div className="my-sizing my-margin">
                <Link className="btn mb-2" to="/admin/recruitments/new">
                    Add new
                </Link>
                <div className="d-flex flex-row flex-wrap">
                {recruitment.map((u) => (
                        <Link className="custom-card" to={`/admin/recruitments/${departament}/${u.id}`}>
                        <div
                            className="card border-dark m-3 my-card"
                            key={u.id}
                        >
                            <div className="card-header">Start date: {u.start_date}</div>
                            <div className="card-body">
                                <h4 className="card-title">{u.name}</h4>
                                <p className="card-text">{u.departament}</p>
                            </div>
                            <div className="card-header">End date: {u.end_date}</div>

                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
