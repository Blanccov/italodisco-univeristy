import React, { useState, useEffect } from "react";
import axiosClient from "../axios-client";
import styles from "./Recruitment.module.scss";
import { Link } from "react-router-dom";

export default function RecruitmentShow() {
    const [recruitment, setRecruitment] = useState([]);
    const [loading, setLoding] = useState(false);

    useEffect(() => {
        getRecruitment();
    }, []);

    const getRecruitment = () => {
        axiosClient
            .get("/recruitments")
            .then(({ data }) => {
                setRecruitment(data.data);
            })
            .catch(() => {});
    };

    return (
        <div className={styles["bg-image"] + " d-flex flex-column"}>
            <div className="my-sizing">
            {recruitment.map((u) => (
                <div className="card border-dark mb-3 my-card">
                <div className="card-header">{u.departament}</div>
                <div className="card-body">
                  <h4 className="card-title">{u.name}</h4>
                  <p className="card-text">{u.description}</p>
                </div>
                </div>
            ))}
        </div></div>

    );
}
