import React, { useState, useEffect } from "react";
import Card from "../UX/Card";
import axiosClient from "../axios-client";
import styles from "./Recruitment.module.scss";

export default function Recruitment() {
    const [recruitments, setRecruitments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRecruitment();
    }, []);

    const getRecruitment = () => {
        setLoading(true);
        axiosClient
            .get("/recruitments/getDepartments")
            .then(({ data }) => {
                setLoading(false);
                setRecruitments(data);
            })
            .catch(() => {
                setLoading(false);
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

            <div className="my-sizing d-flex  flex-wrap w-100 ">
                {recruitments.map((r) => (
                    <Card
                        style={{
                            backgroundImage: `url("images/bookphoto.jpg")`,
                        }}
                        to={"/recruitments/" + r.departament}
                    >
                        {r.departament}
                    </Card>
                ))}
            </div>
        </div>
    );
}
