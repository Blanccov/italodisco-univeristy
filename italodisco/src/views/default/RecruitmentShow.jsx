import React, { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { Link, useParams } from "react-router-dom";

export default function RecruitmentShow() {
    const { departament } = useParams();
    const [recruitment, setRecruitment] = useState([]);
    // const [loading, setLoding] = useState(false);

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
            })
            .catch(() => {});
    };

    return (
        <div className={styles["bg-image"]}>
            <div className="my-sizing">
                <Link className="btn mb-2" to="/recruitments/new">
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

                            <Link to={"/applications/" + u.id}>Apply</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
