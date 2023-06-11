import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { Link, useParams } from "react-router-dom";

export default function RecruitmentShow() {
    const { departament } = useParams();
    const [recruitment, setRecruitment] = useState([]);
    const [loading, setLoding] = useState(false);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getRecruitment();
    }, []);

    const getRecruitment = () => {
        setLoding(true);
        const dep = { departament };
        axiosClient
            .post(`/recruitments/getRecruitmentsByDepartmentWithDate`, dep)
            .then(({ data }) => {
                setRecruitment(data.recruitments);
                setLoding(false)
            })
            .catch((err) => {
                setLoding(false)
                const response = err.response;
                console.log(err);
                if (response && response.status === 404) {
                    setErrors("There are currently no courses available ;(");
                }
            });
    };

    return (
        <div className={styles["bg-image"]}>
             {loading && (
                <div className="center">
                    <div>
                        <div className="text-white display-4">Loading...</div>
                    </div>
                </div>
            )}
            <div className="my-sizing my-margin">
                {errors && <h1 className="text-white">{errors}</h1>}
                <div className="d-flex flex-row flex-wrap">
                    {recruitment.map((u) => (
                        <Link className="custom-card" to={`/recruitments/${departament}/${u.id}`}>
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
