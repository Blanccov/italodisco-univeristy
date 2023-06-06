import React, { useState, useEffect } from "react";
import Card from "../../UX/Card";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { Link } from "react-router-dom";

export default function Appliacations() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRecruitment();
    }, []);

    const getRecruitment = () => {
        setLoading(true);
        axiosClient
            .get("/applications/showApplications")
            .then(({ data }) => {
                setLoading(false);
                setApplications(data.applications);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const checkStatus = (status) => {
        if (status == 3) {
            return "Accepted";
        } else if (status == 2) {
            return "Paied";
        } else if (status == 1) {
            return "Waitnig for Payment";
        } else if (status == 4) {
            return "Unaccepted";
        } else if (status == 5) {
            return "Rejected";
        }
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

            <div className="my-sizing d-flex flex-wrap w-100 ">
                {applications.map((r) => (
                    <Card
                        style={{
                            backgroundImage: `url("images/bookphoto.jpg")`,
                        }}
                        to={"/applications/" + r.departament}
                        p={checkStatus(r.status_id)}
                    >
                        {r.recruitment_name}
                    </Card>
                ))}
            </div>
            <Link className="btn m-2" to="/recruitments">
                Add new
            </Link>
        </div>
    );
}
