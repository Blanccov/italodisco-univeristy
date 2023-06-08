import React, { useState, useEffect } from "react";
import Card from "../../UX/Card";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

export default function Appliacations() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useStateContext;
    const navigate = useNavigate();

    useEffect(() => {
        getRecruitment();
        getProcessRecruitemnts();
    }, []);

    const getProcessRecruitemnts = () => {
        axiosClient.get("/applications/processRecruitmentResults");

        axiosClient.get("/recruitments/checkAndReopenRecruitment");
    };

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
    console.log(applications);

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
                {applications &&
                    applications.map((r) => (
                        <Card
                            key={r.application_id}
                            style={{
                                backgroundImage: `url("images/bookphoto.jpg")`,
                            }}
                            to={"/applications/payment/" + r.application_id}
                            p={r.status_name}
                        >
                            {r.recruitment_name}
                        </Card>
                    ))}
            </div>
            <Link className="btn m-5" to="/recruitments">
                Add new
            </Link>
        </div>
    );
}
