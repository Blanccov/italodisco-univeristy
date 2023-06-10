import React, { useState, useEffect } from "react";
import Card from "../../UX/Card";
import axiosClient from "../../axios-client";
import styles from "./Recruitment.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

export default function Applications() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useStateContext();
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        getRecruitment();
        getProcessRecruitments();
    }, []);

    const getProcessRecruitments = () => {
        axiosClient.get("/applications/processRecruitmentResults").then(() => {
            axiosClient.get("/recruitments/checkAndReopenRecruitment");
        });
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

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            setUploading(true);
            const formData = new FormData();
            formData.append("pdf", selectedFile);

            axiosClient
                .post("/users/uploadPdf", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    setUploading(false);
                    setSelectedFile(null);
                })
                .catch((error) => {
                    console.log(error);
                    setUploading(false);
                });
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
            {!loading && (
                <div className="my-sizing d-flex flex-wrap w-100 my-margin">
                    <div>
                        <Link className="btn m-5" to="/recruitments">
                            Add new
                        </Link>
                    </div>
                    <div className="d-flex flex-wrap">
                        {applications &&
                            applications.map((r) => (
                                <Card
                                    key={r.application_id}
                                    style={{
                                        backgroundImage: `url("images/bookphoto.jpg")`,
                                    }}
                                    to={
                                        "/applications/payment/" +
                                        r.application_id
                                    }
                                    p={r.status_name}
                                >
                                    {r.recruitment_name}
                                </Card>
                            ))}
                    </div>

                    <div>
                        <h3 className="text-white">
                            Upload PDF with your results
                        </h3>
                        <p className="text-white">
                            Send documents for all recruitments!
                        </p>
                        <input
                            type="file"
                            onChange={handleFileSelect}
                            accept=".pdf"
                        />
                        <button
                            onClick={handleUpload}
                            disabled={!selectedFile || uploading}
                        >
                            Upload
                        </button>
                        {uploading && <div>Uploading...</div>}
                    </div>
                </div>
            )}
        </div>
    );
}
