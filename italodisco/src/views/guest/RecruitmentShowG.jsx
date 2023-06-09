import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { Link, useParams } from "react-router-dom";

export default function RecruitmentShowG() {
    const { departament } = useParams();
    const [recruitment, setRecruitment] = useState([]);
    // const [loading, setLoding] = useState(false);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getRecruitment();
    }, []);

    const getRecruitment = () => {
        const dep = { departament };
        axiosClient
            .post(`/recruitments/getRecruitmentsByDepartment`, dep)
            .then(({ data }) => {
                setRecruitment(data.recruitments);
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 404) {
                    setErrors("There are currently no courses available ;(");
                }
            });
    };

    return (
        <div className={styles["bg-image"]}>
            <div className="my-sizing my-margin">
                {errors && <h1 className="text-white">{errors}</h1>}
                <div className="d-flex flex-row flex-wrap ">
                    {recruitment.map((u) => (
                        <div
                            className="card border-dark m-3 my-card"
                            key={u.id}
                        >
                            <div className="card-header">Start date: {u.start_date}</div>
                            <div className="card-header">End date: {u.end_date}</div>
                            <div className="card-body">
                                <h4 className="card-title">{u.name}</h4>
                                <p className="card-text">{u.description}</p>
                            </div>

                            <Link to={"/applications/" + u.id}>Apply</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
